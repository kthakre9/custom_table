import React from "react";

import TableSelectAll from "./TableSelectAll";

interface TableHeaderProps {
  data: any[];
  headers: any[];
  setNewData: Function;
  selectedRowCount: any[]
}

const TableHeader: React.FC<TableHeaderProps> = props => {
  const { data, headers, setNewData, selectedRowCount } = props;

  const getSelectAllStatus = (): boolean => {
    let allItemSelected: boolean = true;
    for (let d of data) {
      if (
        !d.config.isSelected
      ) {
        allItemSelected = false;
        break;
      }
    }
    return allItemSelected;
  };

  const onSelectAll = () => {
    const checked = !getSelectAllStatus();
    for (let d of data) {
      d.config.isSelected = checked;
    }
    setNewData([...data]);
  }

  return (
    <tr>
      <TableSelectAll
        id="all-rows"
        onChange={() => onSelectAll()}
        checked={getSelectAllStatus()}
        indeterminate={selectedRowCount.length > 0 && selectedRowCount.length < data.length}
      />
      {headers?.map((header, index) => {
        const headerString = header.charAt(0).toUpperCase() + header.slice(1);
        return <th key={`table-header-${index}`}>{headerString}</th>;
      })}
    </tr>
  );
};

export default TableHeader;
