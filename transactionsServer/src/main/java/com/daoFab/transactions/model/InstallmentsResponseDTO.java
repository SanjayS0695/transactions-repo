package com.daoFab.transactions.model;

/**
 * Interface to fetch the projected data from Installments DB native query
 */
public interface InstallmentsResponseDTO {
    Long getId();
    String getSender();
    String getReceiver();
    Integer getTotalAmount();
    Integer getPaidAmount();
}
