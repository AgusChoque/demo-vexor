import { Body, Controller, Post } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { CreateSubDto } from 'src/dto/createSub.dto';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('subscribe')
  async createPremiumSubscribe(@Body() body: CreateSubDto) {
    return await this.paymentsService.createPremiumSubscribe(body);
  }
}
