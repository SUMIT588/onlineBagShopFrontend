import React from "react";

function Input({
  label,
  id,
  className = "",
  type = "text",
  name,
  value,
  onChange,
  required = false,
  ...props
}) {
  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={`shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full text-base border border-gray-300 rounded-md h-12 px-3 ${className}`}
        {...props}
      />
    </div>
  );
}

export default Input;
