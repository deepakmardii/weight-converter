"use client";
import React, { useEffect, useState } from "react";

const WeightConverter = () => {
  const [weight, setWeight] = useState<number | undefined>(undefined);
  const [convertedWeight, setConvertedWeight] = useState<number | undefined>(
    undefined
  );

  useEffect(() => {
    if (typeof weight === "number") {
      const wt = weight * 2.20462;
      setConvertedWeight(wt);
    } else {
      setConvertedWeight(undefined);
    }
  }, [weight]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center border-2 border-indigo-700 text-white font-semibold bg-indigo-700 rounded-md font-mono flex flex-col gap-4 px-10 py-20">
        <div>Weight converter</div>
        <div>You can convert your Weight from kilograms to pounds here:</div>
        <div>Kilograms:</div>
        <input
          className="text-black"
          type="number"
          value={weight || ""}
          onChange={(e) =>
            setWeight(e.target.value ? Number(e.target.value) : undefined)
          }
        />
        <div>Your Weight in pound is: {convertedWeight || ""}</div>
      </div>
    </div>
  );
};

export default WeightConverter;
