import React, { useState } from "react";
import Select from "react-dropdown-select";

const MyDropdown = ({ label, onChange, options, selectedItem }) => {
  const customItemRenderer = ({ item, itemIndex, props, state, methods }) => (
    <div
      key={item.value}
      onClick={() => {
        methods.clearAll();
        methods.addItem(item);
      }}
      style={{ borderBottom: "1px solid #9ca3af" }}
      className="flex items-center bg-slate-500 text-white p-4 pointer hover:bg-gray-900 border-none"
    >
      <img
        src={item.image}
        alt="Blip Logo"
        width="48"
        height="48"
        className="pr-2"
      />
      {item.label}
    </div>
  );

  const contentRenderer = () => (
    <div>
      {selectedItem.length > 0
        ? selectedItem.map((item) => (
            <div
              style={{ width: "500px !important" }}
              key={item.value}
              className="bg-slate-600 text-white px-4 py-2 rounded-lg flex items-center justify-between !w-full"
            >
              <img
                src={item.image}
                alt="Blip Logo"
                width="48"
                height="48"
                className="pr-2"
              />
              {item.label}
            </div>
          ))
        : "Select token"}
    </div>
  );

  return (
    <Select
      style={{
        width: "200px",
        padding: "12px",
        borderRadius: "12px",
      }}
      className="bg-gray-800 rounded-lg hover:bg-gray-900 hover:!border-none !border-none"
      options={options}
      label={label}
      values={selectedItem}
      onChange={(value) => onChange(value)}
      itemRenderer={customItemRenderer}
      dropdownHandle={false}
      searchable={false}
      closeOnSelect={true}
      multi={false}
      contentRenderer={contentRenderer}
    />
  );
};

export default MyDropdown;
