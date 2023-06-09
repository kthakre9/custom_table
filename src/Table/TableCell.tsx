import React from "react";

interface TableCellProps {
  cells: any[];
}

const TableCell: React.FC<TableCellProps> = ({ cells }) => {
  return (
    <>
      {cells.map((cell, index) => {
        return <td key={`table-cell-${index}`}>
          {cell === 'available' && <span className="dot"></span>}
          <span>{cell}</span>

        </td>;
      })}
    </>
  );
};

export default TableCell;
