import React from 'react';

import TableSelectAll from './TableSelectAll';

interface TableHeaderProps {
  headers: any[];
  onSelectAll?: (evt: any) => void;
  selectedRows: any[];
  isSelectableTable: boolean;
  selectableRows: any[]
}

const TableHeader: React.FC<TableHeaderProps> = (props) => {
  const { headers, onSelectAll, selectedRows, isSelectableTable, selectableRows } = props;

  const handleSelectAll = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (!onSelectAll) return

    onSelectAll(evt)
  }

  return (
    <tr className="table_header_row">
      {isSelectableTable && (
        <TableSelectAll
          className="table_header_cell"
          id="all-rows"
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) => handleSelectAll(evt)}
          indeterminate={selectedRows?.length > 0 && selectedRows.length < selectableRows.length}
          checked={selectedRows.length === selectableRows.length}
        />
      )}
      {headers?.map((header, index) => {
        const headerString = header.charAt(0).toUpperCase() + header.slice(1);
        return (
          <th key={`table_header_${index}_${header}`} className="table_header_cell">
            {headerString}
          </th>
        );
      })}
    </tr>
  );
};

export default TableHeader;
