import React from "react";

interface TableSelectAllProps {
  checked?: boolean;
  id: string;
  name?: string;
  onChange: Function;
  indeterminate: boolean
}

const TableSelectAll: React.FC<TableSelectAllProps> = ({
  id,
  name,
  checked,
  onChange,
  indeterminate
}) => {
  return (
    <>
      <th>
        <label htmlFor={id} className="label" aria-labelledby={id}></label>
        <input
          type="checkbox"
          ref={input => {
            if (input) {
              input.indeterminate = indeterminate;
            }
          }}
          aria-label={id}
          checked={checked}
          id={id}
          name={name}
          onChange={evt => {
            onChange(evt, { checked: evt.target.checked, id });
          }}
        ></input>
      </th>
    </>
  );
};

export default TableSelectAll;
