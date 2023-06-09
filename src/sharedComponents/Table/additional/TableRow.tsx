import React from 'react';

import TableCell from './TableCell';
import TableSelectRow from './TableSelectRow';

interface TableRowProps {
  rows: any[];
  onSelectRow?: (evt: any) => void;
  isSelectableTable: boolean;
}

const TableRow: React.FC<TableRowProps> = (props) => {
  const { rows, onSelectRow, isSelectableTable } = props;

  const handleSelectRow = (id: number) => {
    if (!onSelectRow) return

    onSelectRow(id)
  }

  return (
    <>
      {rows.map(({ config, cells, id }) => {
        const selectedRow = config.isSelected ? 'table_row__selected' : '';
        const disabledRow = config.isDisabled ? 'table_row__disabled' : '';

        return (
          <tr key={`table_row_${id}_${cells.name}`} className={`table_body_row ${selectedRow} ${disabledRow}`}>
            {isSelectableTable && (
              <TableSelectRow
                className="table_body_cell"
                id={`table-row-${id}_${cells.name}`}
                onChange={() => handleSelectRow(id)}
                disabled={config.isDisabled}
                checked={config.isSelected}
              />
            )}
            <TableCell cells={cells} />
          </tr>
        );
      })}
    </>
  );
};

export default TableRow;
