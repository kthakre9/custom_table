import React from 'react';

interface TableCellProps {
  cells: any;
}

const TableCell: React.FC<TableCellProps> = ({ cells }) => {
  return (
    <>
      {Object.entries(cells).map(([key, value]: any, index) => {
        const statusAvailable = value === 'available' ? 'table_cell_status__available' : '';
        const statusCell = key === 'status' ? 'table_cell_status' : '';

        return (
          <td key={`table_cell_${index}`} className={`table_body_cell ${statusCell} ${statusAvailable}`}>
            <span>{value}</span>
          </td>
        );
      })}
    </>
  );
};

export default TableCell;
