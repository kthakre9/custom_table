import React from 'react';

import TableHeader from './additional/TableHeader';
import TableRow from './additional/TableRow';
import './Table.css';

interface TableProps {
  canSelect?: boolean;
  headers: any[];
  rows: any[];
  tableName: string;
  onSelectRow?: (evt: any) => void;
  onSelectAll?: (evt: any) => void;
  selectedRows?: any[];
  isSelectableTable: boolean;
  selectableRows: any[]
}

const Table: React.FC<TableProps> = (props) => {
  const { rows,
    headers,
    tableName,
    onSelectRow,
    onSelectAll,
    selectedRows,
    selectableRows,
    isSelectableTable } = props;
  return (
    <table className="table" aria-label={tableName}>
      <thead className="table-head">
        <TableHeader
          isSelectableTable={isSelectableTable}
          headers={headers}
          onSelectAll={onSelectAll}
          selectedRows={selectedRows || []}
          selectableRows={selectableRows}
        />
      </thead>
      <tbody className="table-body">
        <TableRow isSelectableTable={isSelectableTable} rows={rows} onSelectRow={onSelectRow} />
      </tbody>
    </table>
  );
}

export default Table;