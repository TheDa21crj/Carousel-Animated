import React from "react";

// css
import CCss from "./Css/Cards.module.css";

export default function Cards(props) {
  return (
    <div
      key={props.id}
      className={CCss.item}
      style={{ backgroundImage: `url(${props.imgUrl})` }}
    >
      <div className={CCss.content}>
        <div className={CCss.name}>{props.name}</div>
        <div className={CCss.des}>{props.desc}</div>
        <button>See more</button>
      </div>
    </div>
  );
}
