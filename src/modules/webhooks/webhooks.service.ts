import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Webhook } from './entities/webhook.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WebhooksService {
  constructor(@InjectRepository(Webhook) private readonly webhookRepository: Repository<Webhook>) {}

  async handleRenovate(req: Request) {
    console.log('Received Renovate webhook:', req.body);
    const webhook = await this.webhookRepository.create({
      data: req.body,
    });
    await this.webhookRepository.save(webhook);
    return {
      status: 'success',
      message: 'Webhook received and saved successfully',
    };
  }
}
