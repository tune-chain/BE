import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function swaggerSetUp(app: INestApplication): void {
  const options = new DocumentBuilder()
    .setTitle('tune-chain')
    .setDescription('tune-chain API 문서')
    .setVersion('0.0.1')
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api-docs', app, document);
}
