import React, { useState } from "react";
import TableCell from "./TableCell";

interface TableRowProps {
  rows: any[];
}

const TableRow: React.FC<TableRowProps> = props => {
  const { rows } = props;
  return (
    <>
      {rows.map(({ data, id }) => {
        const cells = Object.values(data);
        return (
          <tr key={`table-row-${id}`}>
            <TableCell cells={cells} />
          </tr>
        );
      })}
    </>
  );
};

export default TableRow;
