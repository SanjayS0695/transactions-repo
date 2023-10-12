package com.daoFab.transactions.model;

import lombok.Data;

import java.io.Serializable;
import java.util.List;

@Data
public class PageDTO implements Serializable {
    private List<TransactionResponseDTO> content;
    private int totalPages;

    public PageDTO(List<TransactionResponseDTO> content, int totalPages) {
        this.content = content;
        this.totalPages = totalPages;
    }

    public List<TransactionResponseDTO> getContent() {
        return content;
    }

    public int getTotalPages() {
        return totalPages;
    }
}
