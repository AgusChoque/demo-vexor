import { Injectable } from '@nestjs/common';
import { vexor } from 'src/config/vexor.config';
import { VexorSubscriptionResponse } from 'vexor';

@Injectable()
export class PaymentsService {
  async createPremiumSubscribe({ successUrl, failureUrl, email, name }) {
    const response: VexorSubscriptionResponse = await vexor.subscribe({
      name: 'Premium Subscription',
      description: 'Premium subscription for Vexor',
      price: 15,
      currency: 'ARS',
      interval: 'month',
      platform: 'mercadopago',
      successRedirect: successUrl,
      failureRedirect: failureUrl,
      customer: {
        email,
        name,
      },
    });
    const { raw, ...responseNew } = response;
    return responseNew;
  }

  async createPortal({ returnUrl, identifier }) {
    const response = await vexor.createPortal('mercadopago', {
      returnUrl,
      identifier,
    });

    return response;
  }
}
