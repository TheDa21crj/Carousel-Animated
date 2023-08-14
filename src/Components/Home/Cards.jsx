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
      <div className="content">
        <div className="name">{props.name}</div>
        <div className="des">{props.desc}</div>
        <button>See more</button>
      </div>
    </div>
  );
}
