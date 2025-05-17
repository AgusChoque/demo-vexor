import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Vexor API')
  .setDescription('Vexor API description')
  .setVersion('1.0')
  .addBearerAuth()
  .build();
