import { Injectable } from '@nestjs/common';
import { vexor } from 'src/config/vexor.config';
import { VexorSubscriptionResponse } from 'vexor';

@Injectable()
export class PaymentsService {
  async createPremiumSubscribe({ successUrl, failureUrl, email, name }) {
    const response: VexorSubscriptionResponse = await vexor.subscribe({
      name: 'Premium Subscription',
      description: 'Premium subscription for Vexor',
      price: 10,
      currency: 'usd',
      interval: 'month',
      platform: 'mercadopago',
      successRedirect: successUrl,
      failureRedirect: failureUrl,
    });

    return response;
  }
}
