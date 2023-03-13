import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LaboratoriesModule } from './laboratories/laboratories.module';

@Module({
  imports: [
    WinstonModule.forRoot({
      level: 'http',
      format: winston.format.json(),
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
      ],
    }),
    LaboratoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
