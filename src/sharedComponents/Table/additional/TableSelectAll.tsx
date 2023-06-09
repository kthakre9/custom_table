import React from 'react';

interface TableSelectAllProps {
  checked?: boolean;
  id: string;
  onChange: Function;
  indeterminate: boolean;
  className?: string;
}

const TableSelectAll: React.FC<TableSelectAllProps> = (props) => {
  const { id, checked, onChange, indeterminate, className } = props
  return (
    <>
      <th className={className}>
        <label htmlFor={id} className="label" aria-labelledby={id}></label>
        <input
          type="checkbox"
          ref={(input) => {
            if (input) {
              input.indeterminate = indeterminate;
            }
          }}
          aria-label="Select all rows"
          checked={checked}
          id={id}
          onChange={(evt) => {
            onChange(evt, { checked: evt.target.checked, id });
          }}
        ></input>
      </th>
    </>
  );
};

export default TableSelectAll;
