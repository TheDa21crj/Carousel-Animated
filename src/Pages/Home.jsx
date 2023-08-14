import React from "react";

// Components
import Cards from "../Components/Home/Cards";

// Data
import ImgList from "./../Data/ImgList.json";

// Css
import HCss from "./Css/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className={HCss.mDiv}>
      <div
        className="loadbar"
        //   style={{ width: `${loadingProgress}%` }}
        style={{ width: `60%` }}
      ></div>
      <div
        id={HCss.slide}
        //   ref={slideRef}
      >
        {ImgList ? (
          <>
            {ImgList.map((val) => {
              return (
                <Cards
                  id={val.id}
                  imgUrl={val.imgUrl}
                  name={val.name}
                  desc={val.desc}
                />
              );
            })}
          </>
        ) : (
          ""
        )}
      </div>
      <div className="buttons">
        <button
          id="prev"
          // onClick={handleClickPrev}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button
          id="next"
          // onClick={handleClickNext}
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </div>
  );
}
