import React, { useState } from "react";

export default function Screen(props) {
  return (
    <>
    <div className="screen">
      <input
        className="screenInput"
        type="text"
        placeholder="0"
        value={props.value}
        disabled
      />
    </div>
    </>
    
  );
}
