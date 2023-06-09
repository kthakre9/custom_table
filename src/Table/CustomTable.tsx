//external imports
import React, { useState, useEffect } from "react";

//internal imports
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

interface CustomTableProps {
  data: any[];
}

const CustomTable: React.FC<CustomTableProps> = props => {
  const { data } = props;
  const [newData, setNewData] = useState([] as any[]);

  const headers = Object.keys(
    data.reduce((result, obj) => {
      return Object.assign(result, obj);
    }, {})
  );

  // on page load format data
  useEffect(() => {
    const updatedData: any[] = data.map((r, idx = 1) => {
      const newRow: any = {
        id: idx++
      };
      newRow.data = {
        ...r
      };
      newRow.config = {
        isSelected: false,
        isDisabled: false
      };

      return newRow;
    });
    setNewData(updatedData)
  }, []);


  return (
    <div className="table_wrapper">

      <table>
        <thead>
          <TableHeader headers={headers} />

        </thead>

        <tbody>
          <TableRow rows={newData} />

        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
