import { Controller, HttpCode, Post, Req } from '@nestjs/common';
import { WebhooksService } from './webhooks.service';

@Controller('webhooks')
export class WebhooksController {
  constructor(private readonly webhooksService: WebhooksService) {}

  @Post('renovate')
  @HttpCode(200)
  async handleRenovate(@Req() req: Request) {
    return this.webhooksService.handleRenovate(req);
  }
}
