import React from "react";

interface TableSelectRowProps {
  ariaLabel?: string;
  checked?: boolean;
  disabled?: boolean;
  id: any;
  name?: string;
  onChange: Function;
}

const TableSelectRow: React.FC<TableSelectRowProps> = ({
  id,
  name,
  ariaLabel,
  checked,
  disabled,
  onChange
}) => {
  return (
    <>
      <td>
        <input
          type="checkbox"
          aria-label={ariaLabel}
          checked={checked}
          id={id}
          name={name}
          onChange= {(evt) => {
            onChange(evt, { checked: evt.target.checked, id });
          }}
          disabled={disabled}
          
        ></input>
      </td>
    </>
  );
};

export default TableSelectRow;
