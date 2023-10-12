package com.daoFab.transactions.model;

import lombok.AllArgsConstructor;

import java.util.List;

@AllArgsConstructor
public class InstallmentDTO {

    private List<Installment> data;
    public List<Installment> getData() {
        return data;
    }

    public void setData(List<Installment> data) {
        this.data = data;
    }
}
