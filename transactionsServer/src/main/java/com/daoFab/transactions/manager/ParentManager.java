package com.daoFab.transactions.manager;

import com.daoFab.transactions.model.PageDTO;
import com.daoFab.transactions.model.TransactionDTO;
import com.daoFab.transactions.model.Transaction;
import com.daoFab.transactions.repository.TransactionRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ResourceLoader;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;

/**
 * @author sanjays
 */
@Service
public class ParentManager {

    @Autowired
    private ResourceLoader resourceLoader;

    @Autowired
    private TransactionRepository transactionRepository;

    /**
     * Initial load of Parent.json to DB
     */
    @PostConstruct
    public void init() {
        ObjectMapper mapper = new ObjectMapper();
        var transactionList = resourceLoader.getResource("classpath:jsons/Parent.json");
        try {
            TransactionDTO transactionDTO = mapper.readValue(transactionList.getFile(), TransactionDTO.class);
            List<Transaction> transactions = transactionDTO.getData();
            this.saveAllParentTransactions(transactions);
            System.out.println("Parents Saved!");
        } catch (IOException e){
            System.out.println("Unable to save Parent transactions: " + e.getMessage());
        }
    }

    /**
     * Method to save all entries of Child.json to transactions table
     *
     * @param transactions
     */
    public void saveAllParentTransactions(List<Transaction> transactions) {
        this.transactionRepository.saveAll(transactions);
    }

    /**
     * Method to get all transactions based on pageNumber and sortBy
     *
     * @param pageNo
     * @param sortBy
     * @return
     */
    public PageDTO getAllTransactions(Integer pageNo, String sortBy) {
        Pageable pageable = PageRequest.of(pageNo, 2, Sort.by(sortBy).ascending());
        var pages = this.transactionRepository.fetchAllParentTransactions(pageable);
        return new PageDTO(pages.getContent(), pages.getTotalPages());
    }
}
