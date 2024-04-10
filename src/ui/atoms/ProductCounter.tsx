"use client";

import React, { useState } from "react";

export const ProductCounter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="w-max flex flex-row items-center justify-center rounded-md border border-neutral-400 ">
      <button
        onClick={() => setCounter((counter) => counter - 1)}
        className="size-8 grid place-items-center"
      >
        -
      </button>
      <input
        type="text"
        readOnly
        value={counter}
        className="w-16 h-8 border-x border-neutral-400 text-center"
      />
      <button
        onClick={() => setCounter((counter) => counter + 1)}
        className="size-8 grid place-items-center"
      >
        +
      </button>
    </div>
  );
};
