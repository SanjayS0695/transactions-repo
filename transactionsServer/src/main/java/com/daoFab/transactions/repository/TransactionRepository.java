package com.daoFab.transactions.repository;

import com.daoFab.transactions.model.Transaction;
import com.daoFab.transactions.model.TransactionResponseDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long> {
    @Query(value = "SELECT t.parent_id AS parentId, sender, receiver, total_amount AS totalAmount, SUM(i.paid_amount) AS totalPaidAmount " +
            "FROM transactions AS t INNER JOIN installments AS i WHERE i.parent_id = t.parent_id Group BY T.parent_id", nativeQuery = true)
    Page<TransactionResponseDTO> fetchAllParentTransactions(Pageable pageable);
}
