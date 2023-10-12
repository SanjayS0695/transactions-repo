package com.daoFab.transactions.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@Entity
@Table(name = "transactions")
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class Transaction {

    @Id
    @GeneratedValue( strategy = GenerationType.AUTO )
    @JsonProperty("id")
    @Column(name = "parent_id")
    private Long id;

    @JsonProperty("sender")
    private String sender;

    @JsonProperty("receiver")
    private String receiver;

    @JsonProperty("totalAmount")
    @Column(name = "total_amount")
    private Integer totalAmount;

    @Transient
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "parent_id")
    private List<Installment> installments;

    public Transaction(){}

}
