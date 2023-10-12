package com.daoFab.transactions.model;
import lombok.AllArgsConstructor;

import java.util.List;

@AllArgsConstructor
public class TransactionDTO {
    private List<Transaction> data;

    public List<Transaction> getData() {
        return data;
    }

    public void setData(List<Transaction> data) {
        this.data = data;
    }
}
