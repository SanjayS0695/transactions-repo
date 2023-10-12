export const prepareTransactionsBody = (data) => {
  let bodyArray = [];
  if (data?.length) {
    data?.forEach((element, index) => {
      let array = [];
      array.push(
        {
          key: index + 1,
          value: element.parentId,
        },
        {
          key: index + 2,
          value: element.sender,
        },
        {
          key: index + 3,
          value: element.receiver,
        },
        {
          key: index + 4,
          value: element.totalAmount,
        },
        {
          key: index + 5,
          value: (
            <a href={`/transactions/${element?.parentId}`}>
              {element.totalPaidAmount}
            </a>
          ),
        }
      );
      bodyArray.push({
        key: index,
        value: array,
      });
    });
    return bodyArray;
  }
  return bodyArray;
};

export const prepareInstallmentsBody = (data) => {
  let bodyArray = [];
  if (data?.length) {
    data?.forEach((element, index) => {
      let array = [];
      array.push(
        {
          key: index + 1,
          value: element.id,
        },
        {
          key: index + 2,
          value: element.sender,
        },
        {
          key: index + 3,
          value: element.receiver,
        },
        {
          key: index + 4,
          value: element.totalAmount,
        },
        {
          key: index + 5,
          value: element.paidAmount,
        }
      );
      bodyArray.push({
        key: index,
        value: array,
      });
    });
    return bodyArray;
  }
  return bodyArray;
};
