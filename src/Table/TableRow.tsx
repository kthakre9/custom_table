import React, { useState } from "react";

import TableCell from "./TableCell";
import TableSelectRow from "./TableSelectRow";

interface TableRowProps {
  rows: any[];
  setNewData: Function;
}

const TableRow: React.FC<TableRowProps> = props => {
  const { rows, setNewData } = props;

  const onSelectRow = (id: any) => {
    const selectedRow = rows.find(d => {
      return d.id === id;
    });
    if (selectedRow) {
      selectedRow.config.isSelected = !selectedRow.config.isSelected
    }
    setNewData([...rows])
  }

  return (
    <>
      {rows.map(({ data, id }) => {
        const selectedRow = rows.find(d => d.id === id);
        const cells = Object.values(data);
        return (
          <tr key={`table-row-${id}`}>
            <TableSelectRow
              id={`table-row-${id}`}
              onChange={() => onSelectRow(id)}
              checked={selectedRow?.config?.isSelected}
            // disabled={}
            />
            <TableCell cells={cells} />
          </tr>
        );
      })}
    </>
  );
};

export default TableRow;
