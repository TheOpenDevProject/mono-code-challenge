import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FederationModule } from './modules/federation/federation.module';

@Module({
  imports: [FederationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
