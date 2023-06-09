//external imports
import React, { useState, useEffect } from "react";
import { MdFileDownload } from "react-icons/md";

//internal imports
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import DialogBox from "../DialogBox";

interface CustomTableProps {
  data: any[];
}

const CustomTable: React.FC<CustomTableProps> = props => {
  const { data } = props;
  const [newData, setNewData] = useState([] as any[]);
  const [selectedRowCount, setSelectedRowCount]: [any[], Function] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

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
    // eslint-disable-next-line
  }, []);

  const tempArray: any = [];
  // run every time there's any data updates
  useEffect(() => {
    newData.forEach(({ data, config }) => {
      if (config.isSelected === true)
        tempArray.push(data)
    })

    setSelectedRowCount(tempArray)
    // eslint-disable-next-line
  }, [newData])

  const handleDownload = () => {
    setIsOpen(true)
  }

  return (
    <>
      <h1>Custom table with selection </h1>
      {(isOpen && selectedRowCount.length > 0) && <DialogBox setIsOpen={setIsOpen} selectedRows={selectedRowCount} />}
      <div className="table_wrapper">
        <div className="table_toolbar_wrapper">
          <>
            {selectedRowCount.length > 0 ? selectedRowCount.length : 'None'} Selected
            <button disabled={selectedRowCount.length <= 0} className="table_button" onClick={handleDownload}>
              <span className="button_icon">
                <MdFileDownload />
              </span>
              <span>
                Download Selected
              </span>
            </button>
          </>
        </div>

        <table id="custom_select_table">
          <thead>
            <TableHeader data={newData} selectedRowCount={selectedRowCount} headers={headers} setNewData={setNewData} />

          </thead>

          <tbody>
            <TableRow rows={newData} setNewData={setNewData} />

          </tbody>
        </table>
      </div>
    </>
  );
};

export default CustomTable;
