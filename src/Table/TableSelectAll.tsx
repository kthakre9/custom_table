import React from "react";

interface TableSelectAllProps {
  ariaLabel?: string;
  checked?: boolean;
  disabled?: boolean;
  id: string;
  name?: string;
  onChange: Function;
  indeterminate: boolean
}

const TableSelectAll: React.FC<TableSelectAllProps> = ({
  id,
  name,
  ariaLabel,
  checked,
  disabled,
  onChange,
  indeterminate
}) => {
  return (
    <>
      <th>
        <input
          type="checkbox"
          ref={input => {
            if (input) {
              input.indeterminate = indeterminate;
            }
          }}
          aria-label={ariaLabel}
          checked={checked}
          id={id}
          name={name}
          onChange={evt => {
            onChange(evt, { checked: evt.target.checked, id });
          }}
          disabled={disabled}
        ></input>
      </th>
    </>
  );
};

export default TableSelectAll;
