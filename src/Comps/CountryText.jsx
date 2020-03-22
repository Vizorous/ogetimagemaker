import React from "react";

export default function CountryText(props) {
  return (
    <>
      <div
        ref={props.countryNodeRef}
        className="Container-location"
        style={{
          marginLeft: `${props.sizeControl * 140}px`,
          marginTop: `${props.sizeControl * 460}px`,
          fontSize: `${props.sizeControl * props.countryFontSize}px`,
          textShadow: `0 ${props.sizeControl * 8}px
					  ${props.sizeControl * 10}px rgba(0, 0, 0, 0.4)`,
        }}>
        <p className="text-internship">Internship</p>
        {props.country.split("\n").map((item, index) => {
          return (
            <p
              key={index}
              className="text-country"
              style={{
                marginTop: `-${props.sizeControl * 70}px`,
                marginBottom: "0px",
              }}>
              {index === 0 ? `in ${item}` : `${item}`}
            </p>
          );
        })}
      </div>
    </>
  );
}
