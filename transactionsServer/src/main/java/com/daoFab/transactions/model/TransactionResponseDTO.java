package com.daoFab.transactions.model;

/**
 * Interface to fetch the projected data from Transactions DB native query
 */
public interface TransactionResponseDTO  {
    Long getParentId();
    String getSender();
    String getReceiver();
    Integer getTotalAmount();
    Integer getTotalPaidAmount();
}
