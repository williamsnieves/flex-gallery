import React from "react";
import { generateImages } from "./utils/images";
import "../styles/pictures.css";

export const Pictures = () => {
  const pictures = generateImages();

  return (
    <div className="row">
      {pictures.map((pictureUrl, index) => (
        <figure key={index}>
          <img src={pictureUrl} />
          <figcaption>caption {index}</figcaption>
        </figure>
      ))}
    </div>
  );
};
