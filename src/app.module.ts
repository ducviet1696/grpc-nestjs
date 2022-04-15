import { Module } from '@nestjs/common';
import { HeroModule } from './hero/hero.module';
import { TransactionModule } from './transaction/transaction.module';

@Module({
  imports: [HeroModule, TransactionModule],
})
export class AppModule {}
