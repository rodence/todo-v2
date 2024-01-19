export const GlobalTable = ({ column, rows, rowfilter }) => {
  return (
    <div className="mt-4">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>

              {column?.map((data) => (
                <th key={data}>{data}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows?.map((data, rowIndex) => (
              <tr key={rowIndex}>
                <th>{rowIndex + 1}</th>
                {rowfilter?.map((column, colIndex) => (
                  <td key={colIndex}>{data[column]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
