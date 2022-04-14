import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: ['hero', 'transaction'],
    protoPath: [
      join(__dirname, './hero/hero.proto'),
      join(__dirname, './transaction/transaction.proto'),
    ],
  },
};
