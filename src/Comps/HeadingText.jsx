import React from "react";

export default function HeadingText(props) {
	return (
		<>
			<div
				className="container heading"
				style={{
					// backgroundColor: "red",
					width: "inherit",
					height: `${props.sizeControl * 340}px`,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					pointerEvents: "none",
					flexDirection: "column",
				}}>
				{props.oppName.split("\n").map((item, i) => {
					return (
						<h1
							style={{
								color: "#ffffff",
								textAlign: "center",
								alignSelf: "middle",
								fontSize: `${props.sizeControl * 120}px`,
								lineHeight: `${props.sizeControl * 130}px`,
							}}
							key={i}>
							{item}
						</h1>
					);
				})}
			</div>
		</>
	);
}
