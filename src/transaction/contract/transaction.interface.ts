export interface Transaction {
  tokenKey: string;
  bankCode: string;
  accountNo: string;
  payDate: string;
  debitAmount: string;
  respCode: string;
  respDesc: string;
  item: Item;
  orderCode: string;
  username: string;
  realAmount: string;
  promotionCode: string;
}

export interface Item {
  qrInfor: string;
  quantity: string;
  note: string;
}
