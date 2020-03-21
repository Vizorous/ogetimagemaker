import React, { Component } from "react";
import "./GeneratedImage.css";
// import { Input, Form } from "semantic-ui-react";
import Lines from "./Lines";
import Controls from "./Controls";
import Details from "./Details";
import CountryText from "./CountryText";
import HeadingText from "./HeadingText";
import ImageContainer from "./ImageContainer";
import noImg from "../Assets/noimg.jpg";
import dti from "dom-to-image";
import { saveAs } from "file-saver";

const supun = "076 909 2185";
const anupama = "077 867 5798";
const YELLOW = "#ffc000";
const FORM_TEXT_DATA = [
	{
		desc: { label: "Country", placeholder: "Enter the Country" },
		type: "country",
		key: 0,
	},
	{
		desc: { label: "Salary", placeholder: "Enter the Salary" },
		type: "salary",
		key: 1,
	},
	{
		desc: { label: "Opp. Name", placeholder: "Enter the Opp. Name" },
		type: "oppName",
		key: 2,
	},
];
const FORM_CHECKBOX_DATA = [
	{ key: 0, label: "Accomodation", type: "accom" },
	{ key: 1, label: "Food", type: "food" },
	{ key: 2, label: "Airport Pickup", type: "pickup" },
	{ key: 3, label: "Salary Switch", type: "salarySwitch" },
];
const defaultState = {
	bgColor: "#092d31b3",
	country: "Country",
	sizeControl: 0.25,
	salary: 500000,
	food: true,
	accom: true,
	pickup: false,
	salarySwitch: true,
	count: 0,
	adjustedHeight: 0,
	// status: "Provided",
	oppName: "Opportunity\nName",
	image: noImg,
	phoneNo: "Phone No.",
	OGETSwitch: "o", //true for anupama
	phoneSwitch: false,
	midHeight: 300,
	midWidth: "auto",
	outHeight: 300,
	outWidth: "auto",
};
export default class GeneratedImage extends Component {
	constructor(props) {
		super(props);

		this.imageNodeRef = React.createRef();
		this.detailsNodeRef = React.createRef();
		this.state = {
			...defaultState,
		};
	}

	componentDidMount() {
		this.handleDetailsLineHeight(
			this.detailsNodeRef,
			this.state.sizeControl,
			this.state.adjustedHeight,
		);
	}
	componentDidUpdate(prevProps, prevState) {
		this.handleDetailsLineHeight(
			this.detailsNodeRef,
			this.state.sizeControl,
			this.state.adjustedHeight,
		);
	}

	numberWithCommas = x => {
		var parts = x.toString().split(".");
		parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		return parts.join(".");
	};
	handleChange = (value, type) => {
		console.log(value, type);

		this.setState({ [type]: value });
		// console.log("testing");
	};
	handleDetailsLineHeight = (
		detailsNodeRef,
		sizeControl,
		stateAdjustedHeight,
	) => {
		const height = detailsNodeRef.current.clientHeight;
		const adjustedHeight = Math.round(height / sizeControl);
		// console.log(Math.round(adjustedHeight));
		if (stateAdjustedHeight !== adjustedHeight) {
			this.setState({ adjustedHeight });
		}
	};

	// handleOGETSwitch = (value, type) => {
	// 	this.setState({ [type]: value });
	// };
	handleOGETSwitch = (e, { value }) => {
		console.log(value);
		const phoneNo = value === "oGE" ? supun : anupama;
		this.setState({ OGETSwitch: value, phoneNo });
	};
	handleToggle = type => {
		this.setState(prevState => ({ [type]: !prevState[type] }));
	};
	handleClear = () => {
		this.setState({ ...defaultState });
	};
	handleGenerate = () => {
		this.setState({ sizeControl: 1 }, () => {
			// setTimeout(() => {
			let imageNode = this.imageNodeRef;
			console.log(imageNode.current.offsetTop);
			dti.toJpeg(imageNode.current, { quality: 0.8 }).then(blob => {
				window.saveAs(
					blob,
					`${this.state.OGETSwitch}-${this.state.country}-${this.state.oppName}.jpg`,
				);
				// setTimeout(() => {
				this.setState({ sizeControl: 0.25 });
			});
			// }, 200);
			// }, 400);
		});
		// eslint-disable-next-line no-lone-blocks
		{
			// setTimeout(() => {
			// 	let imageNode = this.imageNodeRef;
			// 	console.log(imageNode.current.offsetTop);
			// 	// this.imageNodeRef.offsetLeft = 0;
			// 	// this.imageNodeRef.offsetTop = 0;
			// 	// imageNode.current.offsetTop = 0;
			// 	// imageNode.current.offsetLeft = 0;
			// 	// console.log(this.imageNodeRef);
			// 	setTimeout(() => {
			// 		dti.toJpeg(imageNode.current, { quality: 0.8 }).then(blob => {
			// 			window.saveAs(blob, "image-node.png");
			// 			// this.setState({ sizeControl: 0.25 });
			// 		});
			// 	}, 400);
			// }, 400);
		}
	};
	render() {
		// const dragHandlers = { onStart: this.onStart, onStop: this.onStop };

		return (
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Controls
					FORM_CHECKBOX_DATA={FORM_CHECKBOX_DATA}
					FORM_TEXT_DATA={FORM_TEXT_DATA}
					handleSubmit={this.handleSubmit}
					handleChange={this.handleChange}
					handleGenerate={this.handleGenerate}
					handleClear={this.handleClear}
					handleToggle={this.handleToggle}
					country={this.state.country}
					salary={this.state.salary}
					food={this.state.food}
					accom={this.state.accom}
					pickup={this.state.pickup}
					phoneNo={this.state.phoneNo}
					OGETSwitch={this.state.OGETSwitch}
					handlePhoneSwitch={this.handlePhoneSwitch}
					handleOGETSwitch={this.handleOGETSwitch}
					phoneSwitch={this.state.phoneSwitch}
					salarySwitch={this.state.salarySwitch}
					oppName={this.state.oppName}
				></Controls>
				<div
					style={{
						// backgroundColor: "#303030",
						height: `${this.state.sizeControl * 2000}px`,
						width: `${this.state.sizeControl * 2000}px`,
					}}
				>
					<div
						className="background"
						ref={this.imageNodeRef}
						style={{
							position: "relative",
							// backgroundImage: `url(${TempImage})`,
							height: `${this.state.sizeControl * 2000}px`,
							width: `${this.state.sizeControl * 2000}px`,
							backgroundSize: "contain",
						}}
					>
						<div
							className="Container middleImage"
							style={{
								// backgroundImage: `url(${TempImage})`,
								height: `${this.state.sizeControl * 2000}px`,
								width: `${this.state.sizeControl * 2000}px`,

								// backgroundSize: "contain",
							}}
						>
							<ImageContainer
								image={this.state.image}
								bgColor={this.state.bgColor}
								// dragHandlers={this.dragHandlers}
								sizeControl={this.state.sizeControl}
							></ImageContainer>
						</div>
						<div
							className="Container lines"
							style={{
								height: `${this.state.sizeControl * 2000}px`,
								width: `${this.state.sizeControl * 2000}px`,
								pointerEvents: "none",
							}}
						>
							<Lines color={YELLOW} height={this.state.adjustedHeight}></Lines>
						</div>
						<HeadingText
							sizeControl={this.state.sizeControl}
							oppName={this.state.oppName}
						></HeadingText>
						<div className="Container texts">
							<div className="Container-top-text">
								<CountryText
									country={this.state.country}
									sizeControl={this.state.sizeControl}
								></CountryText>
							</div>
							<div className="Container-btm-text">
								<Details
									sizeControl={this.state.sizeControl}
									detailsNodeRef={this.detailsNodeRef}
									salarySwitch={this.state.salarySwitch}
									YELLOW={YELLOW}
									salary={this.state.salary}
									food={this.state.food}
									accom={this.state.accom}
									pickup={this.state.pickup}
									OGETSwitch={this.state.OGETSwitch}
									numberWithCommas={this.numberWithCommas}
								></Details>
							</div>
							<div
								style={{
									position: "absolute",
									marginTop: `${this.state.sizeControl * 1742}px`,
									marginLeft: `${this.state.sizeControl * 1180}px`,
								}}
							>
								<h1
									className={"whatsapp"}
									style={{
										fontSize: `${this.state.sizeControl * 50}px`,
										fontWeight: "normal",
									}}
								>
									Whatsapp Now!
								</h1>
								<h2
									className="phoneno"
									style={{
										fontSize: `${this.state.sizeControl * 80}px`,
										marginTop: `-${this.state.sizeControl * 12}px `,
									}}
								>
									{this.state.phoneNo}
								</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
