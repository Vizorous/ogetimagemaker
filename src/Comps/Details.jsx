import React from "react";

export default function Details(props) {
	return (
		<>
			<div
				className="container-details-main"
				style={{
					// height: `${props.sizeControl * 400}px`,
					marginLeft: `${props.sizeControl * 1430}px`,
					marginTop: `${props.sizeControl * 55}px`,
					fontSize: `${props.sizeControl * 60}px`,
					textShadow: `0 ${props.sizeControl * 4}px
					  ${props.sizeControl * 10}px rgba(0, 0, 0, 0.5)`,
					lineHeight: `${props.sizeControl * 30}px`,
					letterSpacing: `${props.sizeControl * 8}px`,
				}}
				ref={props.detailsNodeRef}>
				{}
				{props.salarySwitch ? (
					<div className="container-details salary">
						<p className="text-salary-headline" style={{ color: "white", fontWeight: "bold" }}>
							SALARY :
						</p>
						<p
							className="text-salary-var"
							style={{
								color: props.YELLOW,
								fontWeight: "bold",
								letterSpacing: `${props.sizeControl * 4}px`,
								fontSize: `${props.sizeControl * 70}px`,
							}}>
							{props.numberWithCommas(props.salary)}
							<span style={{ fontSize: `${props.sizeControl * 50}px` }}> LKR</span>
						</p>
						{}
					</div>
				) : null}
				{props.accom ? (
					<div className="container-details accom">
						{}
						<p
							className="text-accom-headline"
							style={{
								color: "white",
								fontWeight: "bold",
								letterSpacing: `${props.sizeControl * 5}px`,
							}}>
							Accomodation
						</p>
						<p
							className="text-accom-var"
							style={{
								color: props.YELLOW,
								fontWeight: "bold",
								letterSpacing: `${props.sizeControl * 4}px`,
								// fontSize: `${props.sizeControl * 80}px`,
							}}>
							{props.OGETSwitch === "oGT" ? `Provided` : `Covered`}
						</p>
					</div>
				) : null}
				{props.food ? (
					<div className="container-details food">
						<p
							className="text-food-headline"
							style={{
								color: "white",
								fontWeight: "bold",
								letterSpacing: `${props.sizeControl * 5}px`,
							}}>
							Food
						</p>
						<p
							className="text-food-var"
							style={{
								color: props.YELLOW,
								fontWeight: "bold",
								letterSpacing: `${props.sizeControl * 4}px`,
								// fontSize: `${props.sizeControl * 80}px`,
							}}>
							{props.OGETSwitch === "oGT" ? `Provided` : `Covered`}
						</p>
						{}
					</div>
				) : null}
				{props.pickup ? (
					<div className="container-details pickup">
						<p
							className="text-pickup-headline"
							style={{
								color: "white",
								fontWeight: "bold",
								letterSpacing: `${props.sizeControl * 5}px`,
							}}>
							Airport Pickup
						</p>
						<p
							className="text-pickup-var"
							style={{
								color: props.YELLOW,
								fontWeight: "bold",
								letterSpacing: `${props.sizeControl * 4}px`,
								// fontSize: `${props.sizeControl * 80}px`,
							}}>
							{props.OGETSwitch === "oGT" ? `Provided` : `Covered`}
						</p>
						{}
					</div>
				) : null}
			</div>
		</>
	);
}
