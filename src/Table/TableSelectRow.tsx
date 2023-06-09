import React from "react";

interface TableSelectRowProps {
  ariaLabel?: string;
  checked?: boolean;
  id: any;
  name?: string;
  onChange: Function;
}

const TableSelectRow: React.FC<TableSelectRowProps> = ({
  id,
  name,
  checked,
  onChange
}) => {
  return (
    <>
      <td>
        <label htmlFor={id} className="label" aria-labelledby={id}></label>
        <input
          type="checkbox"
          aria-label={id}
          checked={checked}
          id={id}
          name={name}
          onChange={(evt) => {
            onChange(evt, { checked: evt.target.checked, id });
          }}
        ></input>
      </td>
    </>
  );
};

export default TableSelectRow;
