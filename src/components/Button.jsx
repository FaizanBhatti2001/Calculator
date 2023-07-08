import React from "react";

export default function Button(props) {
  return (
    <div className={props.position}>
      <div>
        <button
          onClick={() => props.dataShare(props.text)}
          className={"tile " + props.cls}
          type="button"
        >
          {props.text}
        </button>
      </div>
    </div>
  );
}
