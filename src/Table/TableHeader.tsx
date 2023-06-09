import React from "react";

interface TableHeaderProps {
  headers: any[];
}

const TableHeader: React.FC<TableHeaderProps> = props => {
  const { headers } = props;

  return (
    <tr>
      {headers?.map((header, index) => {
        const headerString = header.charAt(0).toUpperCase() + header.slice(1);
        return <th key={`table-header-${index}`}>{headerString}</th>;
      })}
    </tr>
  );
};

export default TableHeader;
