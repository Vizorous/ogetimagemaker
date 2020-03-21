import React, { Component } from "react";
import { rgbaToAHex } from "hex-and-rgba";

export default class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() {}

	render() {
		return (
			<>
				<div
					style={{
						position: "sticky",

						height: "4rem",
						display: "flex",
						alignItems: "flex-end",
						zIndex: 99,
						top:
							Math.abs(Math.round(this.props.Pos)) < 2 * 14
								? `${2 * 14 + Math.round(this.props.Pos)}px`
								: `0px`,
					}}
				>
					<h1
						style={{
							marginBottom:
								Math.abs(Math.round(this.props.Pos)) < 2 * 14
									? `${21 + Math.round(this.props.Pos / 4)}px`
									: `14px`,
							opacity: 1,
							zIndex: 100,
						}}
					>
						Testing
					</h1>
					<div
						style={{
							backgroundColor: `#037EF3`,
							height: "4rem",
							width: "100%",
							position: "absolute",
							opacity:
								Math.abs(Math.round(this.props.Pos)) < 2 * 14
									? Math.round(-this.props.Pos) / (2 * 14)
									: 1,
						}}
					></div>
				</div>
				<div
					className="headercover"
					style={{
						opacity:
							Math.abs(Math.round(this.props.Pos)) < 2 * 14
								? Math.round(-this.props.Pos) / (2 * 14)
								: 1,
						backgroundColor: `#037EF3`,
					}}
				></div>
			</>
		);
	}
}
