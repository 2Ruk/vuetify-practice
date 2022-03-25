import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FoodModule } from './food/food.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const uri = process.env.uri;

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      connectionName: 'Food',
      useFactory: () => ({
        uri: uri,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
      inject: [ConfigService],
    }),
    FoodModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
