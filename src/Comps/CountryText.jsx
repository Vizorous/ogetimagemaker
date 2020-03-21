import React from "react";

export default function CountryText(props) {
	return (
		<>
			<div
				className="Container-location"
				style={{
					marginLeft: `${props.sizeControl * 140}px`,
					marginTop: `${props.sizeControl * 460}px`,
					fontSize: `${props.sizeControl * 234}px`,
					textShadow: `0 ${props.sizeControl * 8}px
					  ${props.sizeControl * 10}px rgba(0, 0, 0, 0.4)`,
				}}>
				<p className="text-internship">Internship</p>
				<p className="text-country" style={{ marginTop: `-${props.sizeControl * 70}px` }}>
					in {props.country}
				</p>
			</div>
		</>
	);
}
