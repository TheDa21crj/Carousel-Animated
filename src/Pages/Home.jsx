import React from "react";

// Components
import Cards from "../Components/Home/Cards";

// Data
import ImgList from "./../Data/ImgList.json";

export default function Home() {
  return (
    <div>
      Home
      {ImgList ? (
        <>
          {ImgList.map((val, key) => {
            return (
              <>
                <Cards key={val.id} />
              </>
            );
          })}
        </>
      ) : (
        ""
      )}
    </div>
  );
}
