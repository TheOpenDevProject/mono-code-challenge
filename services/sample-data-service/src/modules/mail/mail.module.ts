import { Global, Module } from '@nestjs/common';
import { MailService } from './services/mailService.service';

@Global()
@Module({
  imports: [],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
