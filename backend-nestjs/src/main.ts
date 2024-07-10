import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  
  app.setGlobalPrefix('jiro/v1')

  app.enableCors()
  
  const config = new DocumentBuilder()
    .setTitle('Jiru API Documentation')
    .setDescription(' The Jiru API Documentation for the Jiru App.')
    .setVersion('1.5')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('jiruRestAPI', app, document);

  await app.listen(3000);

}
bootstrap();
