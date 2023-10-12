package com.daoFab.transactions.manager;

import com.daoFab.transactions.model.Installment;
import com.daoFab.transactions.model.InstallmentDTO;
import com.daoFab.transactions.model.InstallmentsResponseDTO;
import com.daoFab.transactions.repository.InstallmentRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;

/**
 * @author sanjays
 */
@Service
public class InstallmentManager {

    @Autowired
    private ResourceLoader resourceLoader;

    @Autowired
    private InstallmentRepository installmentRepository;

    /**
     * Initial load of Child.json to DB
     */
    @PostConstruct
    public void init() {
        ObjectMapper mapper = new ObjectMapper();
        var installmentList = resourceLoader.getResource("classpath:jsons/Child.json");
        try {
            InstallmentDTO installmentDTO = mapper.readValue(installmentList.getFile(), InstallmentDTO.class);
            List<Installment> installments = installmentDTO.getData();
            this.saveAllInstallments(installments);
            System.out.println("Installments Saved!");
        } catch (IOException e){
            System.out.println("Unable to save Installments: " + e.getMessage());
        }
    }

    /**
     * Method to save all entries of Child.json to installments table
     *
     * @param installments
     */
    public void saveAllInstallments(List<Installment> installments) {
        this.installmentRepository.saveAll(installments);
    }

    /**
     * Method to fetch all the installments using parentId
     *
     * @param parentId
     * @return
     */
    public List<InstallmentsResponseDTO> fetchAllInstallmentsByParentId(Long parentId) {
        var pages = this.installmentRepository.fetchAllInstallmentsByParentId(parentId);
        return pages.stream().toList();
    }
}
