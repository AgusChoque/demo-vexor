import { Module } from '@nestjs/common';
import { PaymentsModule } from './modules/payments/payments.module';
import { WebhooksModule } from './modules/webhooks/webhooks.module';

@Module({
  imports: [PaymentsModule, WebhooksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
