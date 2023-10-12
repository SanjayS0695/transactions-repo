package com.daoFab.transactions.repository;

import com.daoFab.transactions.model.Installment;
import com.daoFab.transactions.model.InstallmentsResponseDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InstallmentRepository extends JpaRepository<Installment, Long> {

    @Query(value = "SELECT i.id, t.sender, t.receiver, t.total_amount as totalAmount, i.paid_amount as paidAmount " +
            "FROM installments as i INNER JOIN transactions as t WHERE i.parent_id = :parentId and t.parent_id = :parentId ORDER BY i.id", nativeQuery = true)
    List<InstallmentsResponseDTO> fetchAllInstallmentsByParentId(Long parentId);
}
