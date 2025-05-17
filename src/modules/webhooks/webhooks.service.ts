import { Injectable } from '@nestjs/common';

@Injectable()
export class WebhooksService {
  async handleRenovate(req: Request) {
    const response = {
      message: 'Webhook event processed successfully',
      data: req.body,
    };
    console.log('Webhook event:', response);
    return response;
  }
}
