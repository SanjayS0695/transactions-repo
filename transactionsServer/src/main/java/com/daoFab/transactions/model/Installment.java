package com.daoFab.transactions.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@Entity
@Table(name = "installments")
@JsonIgnoreProperties(ignoreUnknown = true)
@AllArgsConstructor
public class Installment {

    @Id
    @GeneratedValue( strategy = GenerationType.AUTO )
    @JsonProperty("id")
    private Long id;

    @JsonProperty("parentId")
    @Column(name = "parent_id")
    private String parentId;

    @JsonProperty("paidAmount")
    @Column(name = "paid_amount")
    private Integer paidAmount;

    @Transient
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "parent_id")
    private Transaction transaction;

    public Installment(){}

}
