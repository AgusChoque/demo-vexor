import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { CreateSubDto } from 'src/dto/createSub.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('Payments')
@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @ApiBody({
    description: 'Create a subscription',
    type: CreateSubDto,
    examples: {
      Agustin: {
        value: {
          email: 'test_user_1080682546@testuser.com',
          name: 'TESTUSER1080682546',
          successUrl: 'https://vexordemo.com/success',
          failureUrl: 'https://vexordemo.com/cancel',
        },
      },
    },
  })
  @Post('subscribe')
  async createPremiumSubscribe(@Body() body: CreateSubDto) {
    return await this.paymentsService.createPremiumSubscribe(body);
  }

  @ApiBody({
    description: 'Create a subscription',
    type: Object,
    examples: {
      Agustin: {
        value: {
          returnUrl: 'https://vexordemo.com/success',
          identifier: 'identifier',
        },
      },
    },
  })
  @Post('portal')
  @HttpCode(200)
  async createPortal(@Body() body: { returnUrl: string; identifier: string }) {
    return await this.paymentsService.createPortal(body);
  }
}
