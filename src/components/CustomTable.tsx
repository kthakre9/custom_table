//external imports
import React, { useState, useEffect } from 'react';

//internal imports
import DialogBox from './DialogBox';
import Table from '../sharedComponents/Table/Table';
import TableToolBar from '../sharedComponents/Toolbar/TableToolBar';

interface CustomTableProps {
  data: any[];
}

const CustomTable: React.FC<CustomTableProps> = (props) => {
  const { data } = props;
  const [newData, setNewData] = useState([] as any[]);
  const [selectedRows, setSelectedRows]: [any[], Function] = useState([]);
  const [selectableRows, setSelectableRows]: [any[], Function] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const headers = Object.keys(
    data.reduce((result, obj) => {
      return Object.assign(result, obj);
    }, {})
  );

  // on page load format data
  useEffect(() => {
    let availableRows: any[] = []
    const updatedData: any[] = data.map((r, idx = 1) => {
      const newRow: any = {
        id: idx++
      };
      newRow.cells = { ...r }
      newRow.config = {
        isSelected: false,
        isDisabled: r.status !== 'available',
      };

      if (r.status === 'available') {
        availableRows.push(r)
      }

      return newRow;
    });

    setSelectableRows(availableRows)
    setNewData(updatedData)
    // eslint-disable-next-line
  }, []);



  const tempArray: any = [];
  // run every time there's any data updates
  useEffect(() => {
    newData.forEach(({ cells, config }) => {
      if (config.isSelected === true) tempArray.push(cells);
    });

    setSelectedRows(tempArray);
    // eslint-disable-next-line
  }, [newData]);

  const handleDownload = () => {
    setIsOpen(true);
  };

  const onSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      newData.forEach(({ config }) => {
        if (!config.isDisabled) {
          config.isSelected = true;
        }
      });
      setNewData([...newData]);
    } else {
      newData.forEach(({ config }) => {
        config.isSelected = false;
      });
      setNewData([...newData]);
    }
  };

  const onSelectRow = (id: any) => {
    const selectedRow = newData.find((d) => {
      return d.id === id;
    });

    if (selectedRow && !selectedRow.config.isDisabled) {
      selectedRow.config.isSelected = !selectedRow.config.isSelected;
    }
    setNewData([...newData]);
  };

  const actions = ['Download selected'];

  return (
    <>
      <h1>Custom table with selection </h1>
      {isOpen && selectedRows.length > 0 && <DialogBox setIsOpen={setIsOpen} selectedRows={selectedRows} />}

      <div className="table_wrapper" id="custom_select_table">
        <TableToolBar actions={actions} actionEvent={handleDownload} selectedRows={selectedRows} />
        <Table
          selectableRows={selectableRows}
          isSelectableTable={true}
          onSelectAll={onSelectAll}
          onSelectRow={onSelectRow}
          headers={headers}
          rows={newData}
          selectedRows={selectedRows}
          tableName="customtable"
        />
      </div>
    </>
  );
};

export default CustomTable;
