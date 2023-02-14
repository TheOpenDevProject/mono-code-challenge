import { Global, Module } from '@nestjs/common';
import { AdvertisementResolver } from './advertisement.resolver';

@Global()
@Module({
  providers: [AdvertisementResolver],
})
export class AdvertisementModule {}
