import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config/dist';

@Module({


    imports : [

        TypeOrmModule.forRootAsync({


            imports : [ConfigModule],
            inject : [ConfigService],
            useFactory : (ConfigService : ConfigService) => ({


                type :'postgres',
                host : ConfigService.get("POSTGRED_HOST"),
                port : ConfigService.get("POSTGRED_PORT"),
                username : ConfigService.get("POSTGRED_USER"),
                password : ConfigService.get("POSTGRED_PASSWORD"),
                database : ConfigService.get("POSTGRED_DB"),
          
            entities : [
                __dirname + "/../**/*.entity{.ts,.js}"
            ],
            autoLoadEntities : true,
            synchronize : true,

        })

        })

    ]





})
export class DblishModule {}
