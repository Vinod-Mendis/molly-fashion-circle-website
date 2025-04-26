"use client";

import { FaMapMarkerAlt } from "react-icons/fa";
import AddressItem from "./AddressItem";

export default function Addressblock({ branchNumber, no, street, town }) {
  return (
    <div>
      {/* Branch Header */}
      <div className="flex items-center mb-2 text-[#CDCDCD]">
        <FaMapMarkerAlt className="mr-2" />
        <span className="text-xs uppercase">branch {branchNumber}</span>
      </div>

      {/* Address Block */}
      <div className="text-black">
        {/* Number and Street */}
        <div className="flex flex-wrap">
          <AddressItem text={no} dialogueText="Number" />
          <AddressItem text={street} dialogueText="Street" />
        </div>

        {/* Town */}
        <div className="flex flex-wrap mt-1">
          <AddressItem text={town} dialogueText="Town" />
        </div>

        {/* Country*/}
        <div className="flex flex-wrap mt-1">
          <AddressItem text="Sri Lanka" dialogueText="Country" comma={false} />
        </div>
      </div>
    </div>
  );
}