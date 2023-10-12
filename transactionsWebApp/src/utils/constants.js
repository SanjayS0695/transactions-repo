export const TRANSACTIONS_URL = (pageNumber, sortBy) =>
  `/transactions?pageNumber=${pageNumber}&sortBy=${sortBy}`;
export const INSTALLMENTS_URL = (id) => `/transactions/${id}/installments`;

export const TRANSACTION_TITLE = "Transactions";
export const INSTALLMENTS_TITLE = "Installments";
export const TRANSACTION_FOOTER =
  "Please click the below buttons to see the rest of the transactions";
export const INSTALLMENTS_SUBTITLE = (id) =>
  `Please find the installments paid for the transaction with Id: ${id}`;
export const PREVIOUS_PAGE = "Previous";
export const NEXT_PAGE = "Next";
export const ALL_TRANSACTIONS = "See all transactions";
