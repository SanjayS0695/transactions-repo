import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TableComponent from "../../components/TableComponent";
import Button from "@mui/material/Button";
import { Container } from "react-bootstrap";
import { prepareInstallmentsBody } from "../helper";
import {
  ALL_TRANSACTIONS,
  INSTALLMENTS_SUBTITLE,
  INSTALLMENTS_TITLE,
} from "../../utils/constants";
import styles from "./Installments.module.scss";

const Installments = ({ id, installments }) => {
  const [header] = useState([
    "ID",
    "Sender",
    "Receiver",
    "Total Amount",
    "Paid Amount",
  ]);

  const navigate = useNavigate();

  const [body, setBody] = useState(null);

  useEffect(() => {
    if (installments?.length) {
      setBody(prepareInstallmentsBody(installments));
    }
  }, [installments]);

  const loadTransactionsPage = () => {
    navigate("/transactions");
  };

  return (
    <Container>
      <h1>{INSTALLMENTS_TITLE}</h1>
      <h2>{INSTALLMENTS_SUBTITLE(id)}</h2>
      <TableComponent headerData={header} bodyData={body}></TableComponent>
      <div className={styles["button-wrapper"]}>
        <Button variant="outlined" onClick={loadTransactionsPage}>
          {ALL_TRANSACTIONS}
        </Button>
      </div>
    </Container>
  );
};

export default Installments;
