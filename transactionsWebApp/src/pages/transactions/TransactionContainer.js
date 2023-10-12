import { useDispatch, useSelector } from "react-redux";
import Transactions from "./Transactions";
import { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { TailSpin } from "react-loader-spinner";
import { GET_TRANSACTIONS } from "../../redux/store/actionType";
import styles from "./Transactions.module.scss";

const TransactionContainer = () => {
  const { transactions, loadingData } = useSelector((state) => state.dataState);

  let dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(0);
  const [totalPageNumbers, setTotalPageNumbers] = useState(0);
  const [transactionData, setTransactionData] = useState(null);
  const sortBy = useRef("parentId");

  useEffect(() => {
    if (transactions != null) {
      setTransactionData(transactions?.data);
      setTotalPageNumbers(transactions?.totalPages);
    }
  }, [transactions]);

  useEffect(() => {
    dispatch({
      type: GET_TRANSACTIONS,
      payload: {
        pageNumber,
        sortBy: sortBy.current,
      },
    });
  }, [pageNumber, sortBy]);

  const onPageChange = (event, pageNumber) => {
    setPageNumber(pageNumber);
  };

  return (
    <Container className={styles["align-content-center"]}>
      {loadingData ? (
        <div className="loader">
          <TailSpin />
        </div>
      ) : (
        <Transactions
          transactions={transactionData}
          pageNumber={pageNumber}
          totalPageNumbers={totalPageNumbers}
          onPageChange={onPageChange}
        />
      )}
    </Container>
  );
};

export default TransactionContainer;
