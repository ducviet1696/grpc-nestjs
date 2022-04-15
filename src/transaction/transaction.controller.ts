import { Controller, Inject, OnModuleInit } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Transaction } from './contract/transaction.interface';
import { ClientGrpc } from '@nestjs/microservices';

interface TransactionService {
  getTransaction(transaction: Transaction): Observable<Transaction>;
}
@Controller('transaction')
export class TransactionController implements OnModuleInit {
  private transactionService: TransactionService;

  constructor(
    @Inject('TRANSACTION_PACKAGE') private readonly client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.transactionService =
      this.client.getService<TransactionService>('TransactionService');
  }
}
