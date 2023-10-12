import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { prepareTransactionsBody } from "../helper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TableComponent from "../../components/TableComponent";
import {
  TRANSACTION_FOOTER,
  NEXT_PAGE,
  PREVIOUS_PAGE,
  TRANSACTION_TITLE,
} from "../../utils/constants";
import styles from "./Transactions.module.scss";

const Transactions = ({
  transactions,
  totalPageNumbers,
  pageNumber,
  onPageChange,
}) => {
  const [header] = useState([
    "ID",
    "Sender",
    "Receiver",
    "Total Amount",
    "Total Paid Amount",
  ]);

  const [body, setBody] = useState([]);

  useEffect(() => {
    if (transactions?.length) {
      const preparedBody = prepareTransactionsBody(transactions);
      setBody(preparedBody);
    }
  }, [transactions]);

  return (
    <Container>
      <h1>{TRANSACTION_TITLE}</h1>
      <TableComponent headerData={header} bodyData={body}></TableComponent>
      <h4>{TRANSACTION_FOOTER}</h4>
      <Stack spacing={2} direction="row" className={styles["button-wrapper"]}>
        {!!pageNumber && (
          <Button
            variant="outlined"
            onClick={(event) => onPageChange(event, pageNumber - 1)}
          >
            {PREVIOUS_PAGE}
          </Button>
        )}
        {pageNumber < totalPageNumbers && (
          <Button
            variant="outlined"
            onClick={(event) => onPageChange(event, pageNumber + 1)}
          >
            {NEXT_PAGE}
          </Button>
        )}
      </Stack>
    </Container>
  );
};

export default Transactions;
