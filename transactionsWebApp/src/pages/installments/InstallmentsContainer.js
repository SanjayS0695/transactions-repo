import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Container } from "react-bootstrap";
import { TailSpin } from "react-loader-spinner";
import Installments from "./Installments";
import { GET_INSTALLMENTS } from "../../redux/store/actionType";
import styles from "./Installments.module.scss";

const InstallmentsContainer = () => {
  let { id } = useParams();
  const { installments, loadingData } = useSelector((state) => state.dataState);
  let dispatch = useDispatch();

  const [installmentsData, setInstallmentsData] = useState(null);

  useEffect(() => {
    if (installments?.length) {
      setInstallmentsData(installments);
    }
  }, [installments]);

  useEffect(() => {
    dispatch({
      type: GET_INSTALLMENTS,
      payload: {
        parentId: id,
      },
    });
  }, [id]);

  return (
    <Container className={styles["align-content-center"]}>
      {loadingData ? (
        <div className="loader">
          <TailSpin />
        </div>
      ) : (
        <Installments id={id} installments={installmentsData} />
      )}
    </Container>
  );
};

export default InstallmentsContainer;
