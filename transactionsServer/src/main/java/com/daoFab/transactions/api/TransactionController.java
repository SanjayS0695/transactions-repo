package com.daoFab.transactions.api;

import com.daoFab.transactions.manager.InstallmentManager;
import com.daoFab.transactions.manager.ParentManager;
import com.daoFab.transactions.model.InstallmentsResponseDTO;
import com.daoFab.transactions.model.PageDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author sanjays
 */
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/api")
public class TransactionController {

    @Autowired
    private ParentManager parentManager;

    @Autowired
    private InstallmentManager installmentManager;

    /**
     * Api to fetch all transactions based on pageNumber and OrderBy from transactions table
     *
     * @param pageNumber
     * @param sortBy
     * @return
     */
    @GetMapping(value = "/transactions")
    public PageDTO getAllTransactions(@RequestParam(required = true, name = "pageNumber") Integer pageNumber,
                                      @RequestParam(required = true, name = "sortBy") String sortBy) {
        var pageDTO = this.parentManager.getAllTransactions(pageNumber, sortBy);
        return  pageDTO;
    }

    /**
     * Api to fetch all the installments paid for a transaction with id: transactionId
     *
     * @param transactionId
     * @return
     */
    @GetMapping(value = "/transactions/{transactionId}/installments")
    public List<InstallmentsResponseDTO> fetchAllInstallmentsByParentId(@PathVariable(name = "transactionId") Long transactionId) {
        return this.installmentManager.fetchAllInstallmentsByParentId(transactionId);
    }
}
