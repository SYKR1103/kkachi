import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { DblishModule } from './dblish/dblish.module';
import * as Joi from "@hapi/joi"
import { ConfigModule } from '@nestjs/config/dist';

@Module({
  imports: [ProductModule, DblishModule, ConfigModule.forRoot({


      validationSchema : Joi.object({

        POSTGRES_HOST : Joi.string().required(),
        POSTGRES_USER : Joi.string().required(),
        POSTGRES_PORT : Joi.string().required(),
        POSTGRES_PASSWORD : Joi.string().required(),
        POSTGRES_DB : Joi.string().required(),

      })


    



  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
