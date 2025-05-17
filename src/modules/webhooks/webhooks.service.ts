import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Webhook } from './entities/webhook.entity';
import { Repository } from 'typeorm';
import { vexor } from 'src/config/vexor.config';

@Injectable()
export class WebhooksService {
  constructor(@InjectRepository(Webhook) private readonly webhookRepository: Repository<Webhook>) {}

  async handleRenovate(req: Request) {
    console.log('Request:', req);

    console.log('Received Renovate webhook:', req.body);

    return {
      status: 'success',
      data: req.body,
    };
  }
}
