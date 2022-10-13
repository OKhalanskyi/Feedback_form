import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api')
  app.enableCors({origin:["http://localhost:3000"],credentials:true})
  const {PORT} = process.env
  try {
    await app.listen(PORT,()=>console.log(`started on ${PORT}`))
  }
  catch (error){
    console.log(error)
  }
}
bootstrap();
