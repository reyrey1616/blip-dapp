import React, { useState } from "react";
import SelectDropdown from "../select-dropdown/index";
import BlipLogo from "../../assets/blip_logo.webp";
import SolanaLogo from "../../assets/solana.png";

const options = [
  { value: "blip", label: "BLIP", image: BlipLogo },
  { value: "sol", label: "SOL", image: SolanaLogo },
];

const MiningForm = () => {
  const [selectedToken, setSelectedToken] = useState();

  return (
    <div className="bg-slate-600 text-white rounded-lg w-full md:w-[400px] p-4">
      <SelectDropdown
        placeholder="Select token"
        label="Select token"
        options={options}
        selectedItem={selectedToken}
        onChange={(val) => {
          setSelectedToken(val);
        }}
      />
    </div>
  );
};

export default MiningForm;
