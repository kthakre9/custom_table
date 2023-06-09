import React from 'react';
import { MdFileDownload } from 'react-icons/md';

import './TableToolBar.css';

interface TableToolBarProps {
  selectedRows: any[];
  actions: any[];
  actionEvent?: () => void;
  // future enhancements for actions - search bar for filtering rows, overflow menu with dropdown for handling more actions
}

const TableToolBar: React.FC<TableToolBarProps> = (props) => {
  const { selectedRows, actions, actionEvent } = props

  const handleClick = () => {
    if (!actionEvent) return

    actionEvent();
  }
  return (
    <div className="table_toolbar_wrapper">
      <>
        {selectedRows.length > 0 ? selectedRows.length : 'None'} Selected
        {actions.map((action) => {
          return (
            <button
              disabled={selectedRows.length <= 0}
              key={action}
              className="table_toolbar_button"
              onClick={() => {
                handleClick();
              }}
            >
              <span className="table_toolbar_button__icon">
                <MdFileDownload />
              </span>
              <span>{action}</span>
            </button>
          );
        })}
      </>
    </div>
  );
};

export default TableToolBar;
