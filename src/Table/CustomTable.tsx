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
  const [selectedRowCount, setSelectedRowCount]: [any[], Function] = useState([]);

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

  const tempArray: any = [];
  // run every time there's any data updates
  useEffect(() => {
    newData.forEach(({ data, config }) => {
      if (config.isSelected === true)
        tempArray.push(data)
    })

    setSelectedRowCount(tempArray)
  }, [newData])


  return (
    <div className="table_wrapper">
       <div className="table_toolbar_wrapper">
          <>
            {selectedRowCount.length > 0 ? selectedRowCount.length : 'None'} Selected
            <button>Download</button>
          </>
        </div>

      <table>
        <thead>
          <TableHeader data={newData} selectedRowCount={selectedRowCount} headers={headers} setNewData={setNewData}  />

        </thead>

        <tbody>
          <TableRow rows={newData} setNewData={setNewData} />

        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
