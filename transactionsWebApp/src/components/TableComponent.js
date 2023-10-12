import "./TableComponent.css";

const TableComponent = ({ headerData, bodyData }) => {
  return (
    <div>
      {headerData && bodyData && (
        <table>
          <thead>
            <tr key={"uniqueId"}>
              {headerData.map((data) => (
                <th key={data}>{data}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {bodyData.map((data) => (
              <tr key={data?.key}>
                {data?.value?.map((entity) => (
                  <th key={entity?.key}>{entity?.value}</th>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TableComponent;
