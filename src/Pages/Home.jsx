import React, { useRef, useEffect, useState } from "react";

// Data
import ImgList from "./../Data/ImgList.json";

// Css
import HCss from "./Css/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const slideRef = useRef(null);
  const [loadingProgress, setLoadingProgress] = useState(0);

  //   useEffect(() => {
  //     setTimeout(loadingBar, 5000);
  //   }, [loadingProgress]);

  const handleClickNext = () => {
    let items = slideRef.current.querySelectorAll("#item");
    slideRef.current.appendChild(items[0]);
  };

  const handleClickPrev = () => {
    let items = slideRef.current.querySelectorAll("#item");
    slideRef.current.prepend(items[items.length - 1]);
  };

  //   const loadingBar = () => {
  //     setLoadingProgress(loadingProgress + 1);
  //     handleClickNext();
  //   };

  return (
    <div className={HCss.mDiv}>
      <div className={HCss.loadbar}>
        <div className={HCss.curState}></div>
      </div>
      <div id={HCss.slide} ref={slideRef}>
        {ImgList ? (
          <>
            {ImgList.map((val, key) => {
              return (
                <div
                  key={key}
                  id="item"
                  className={HCss.item}
                  style={{ backgroundImage: `url(${val.imgUrl})` }}
                >
                  <div className={HCss.content}>
                    <div className={HCss.name}>{val.name}</div>
                    <div className={HCss.des}>{val.desc}</div>
                    <button>See more</button>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          ""
        )}
      </div>
      <div className={HCss.buttons}>
        <button id={HCss.prev} onClick={handleClickPrev}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button id={HCss.next} onClick={handleClickNext}>
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </div>
  );
}
