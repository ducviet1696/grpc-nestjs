import { Module } from '@nestjs/common';
import { TransactionController } from './transaction.controller';
import { ClientsModule } from '@nestjs/microservices';
import { grpcClientOptions } from '../grpc-client.options';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'TRANSACTION_PACKAGE',
        ...grpcClientOptions,
      },
    ]),
  ],
  controllers: [TransactionController],
})
export class TransactionModule {}
