import React from 'react';

interface TableSelectRowProps {
  ariaLabel?: string;
  checked?: boolean;
  id: string;
  onChange: Function;
  disabled?: boolean;
  className?: string;
}

const TableSelectRow: React.FC<TableSelectRowProps> = (props) => {
  const { id, checked, disabled, onChange, className } = props
  return (
    <>
      <td className={className}>
        <label htmlFor={id} className="label" aria-labelledby={id}></label>
        <input
          type="checkbox"
          aria-label={`${id} select row`}
          checked={checked}
          id={id}
          onChange={(evt) => {
            onChange(evt, { checked: evt.target.checked, id });
          }}
          disabled={disabled}
        ></input>
      </td>
    </>
  );
};

export default TableSelectRow;
