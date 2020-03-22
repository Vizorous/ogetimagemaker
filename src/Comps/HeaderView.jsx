import React from "react";
import { Header, Menu, Container } from "semantic-ui-react";
const unStickedMenu = {
  paddingTop: "1rem",
  boxShadow: "none",
  border: "none",
  backgroundColor: "#FFF",
};
const StickedMenu = {
  paddingTop: "0",
  boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.2)",
  border: "none",
  backgroundColor: "#037ef3",
};
const unStickedFont = {
  fontSize: "24px",
  lineHeight: "24px",
  color: "#037ef3",
};
const stickedFont = {
  fontSize: "20px",
  lineHeight: "24px",
  color: "#fff",
};
function HeaderView({ Stick }) {
  const aiesecMan = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 207.25 365.08"
        style={{ height: "1.5em", marginLeft: "1rem" }}>
        <title>aiesec manAsset 1aisec man</title>
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              id="aiesec-man-path"
              d="M108.37,158.55c0,4.06.13,8.16-.05,12.24a15.35,15.35,0,0,0,1.5,7.11c7.82,17.78,13.82,36.23,19.94,54.64,3.55,10.68,6.54,21.59,10.73,32,7.26,18.07,12.57,36.85,20.21,54.77a132.62,132.62,0,0,0,6.72,13.44c2.18,3.87,5.25,5.56,9.64,5.76,6.39.28,12.76.14,19.14-.18a15,15,0,0,1,8.77,2.18c1.25.76,2.38,1.74,2.27,3.39s-1.56,2-2.72,2.46c-4.8,1.89-9.88,2.82-14.85,4.13a116.3,116.3,0,0,0-23.11,8.31,18.42,18.42,0,0,1-7.22,2.25,4.52,4.52,0,0,1-4.83-2.91,20.24,20.24,0,0,1-1.48-4.23c-1.09-6.07-3.88-11.39-6.85-16.7-6.38-11.43-13.31-22.64-17.94-34.9-5.68-15-14.36-28.44-21.74-42.56-6.18-11.82-12.74-23.46-18-35.74-.43-1-.83-2-1.47-3.55-1.64,4.57-3.13,8.62-4.56,12.69-4.56,13-8.8,26.16-14.29,38.83-4,9.34-10,17.53-15.65,25.89-7.38,10.89-14.71,21.84-22.42,32.5-3.79,5.24-4.37,10.36-1.73,16.06.71,1.54,1.33,3.12,2.05,4.64,1.37,2.89,3.19,5.36,6.2,6.77a10.5,10.5,0,0,1,2.11,1.41c.84.68,2,1.25,1.79,2.58a3.25,3.25,0,0,1-2.66,2.58c-3.77,1-7.48,1-11-1A28.15,28.15,0,0,1,22,360.14c-6.13-5.36-12.48-10.48-18-16.47-4.91-5.29-5.51-10.6-.5-15.8,9.38-9.74,15-21.66,21-33.44,4.12-8.14,7.88-16.55,13.78-23.56,3-3.61,4.3-7.5,5.12-11.91A487.51,487.51,0,0,0,50,203.9c.75-10.7,3.23-21.11,6-31.43a24.72,24.72,0,0,0,.8-5.39c.43-9.69.81-19.39,1.2-29.09a7.07,7.07,0,0,0-.19-1.06c-1.5,4.22-2.84,7.93-4.14,11.66C49.5,160.76,45.24,172.92,42,185.4c-1.06,4-1,8.13-1.39,12.2a29.86,29.86,0,0,1-1.68,8A10.17,10.17,0,0,1,26,211.05c-3-1.29-4.27-3.88-4.62-7a24.18,24.18,0,0,1,3-15.11c3.87-6.64,5.3-14,6.79-21.28,2.88-14.1,5-28.37,9-42.21,3.42-11.75,6.43-23.61,10.37-35.21C54.15,79.67,60,70.51,68.79,63.75c6.75-5.2,9-11.89,9.81-19.7.58-5.7-.48-11.29-1-16.92a33.51,33.51,0,0,1,1.67-14.27c3.25-9.19,14-14.62,24.06-12.34,8.78,2,14.44,8.15,15.7,17.78a43.52,43.52,0,0,1-4.65,26.13,14.56,14.56,0,0,1-3.78,4.7,7.4,7.4,0,0,1-5.24,1.77c-3.32-.17-4.52.54-5.34,3.76a30.21,30.21,0,0,0-.49,14.51c1.87,7.92,4.24,15.71,5.37,23.8,1.52,10.85,2.71,21.72,3.72,32.63a14.37,14.37,0,0,1,.21,2.52c-.35,3.68,1.53,6,4.07,8.48,10,9.69,20.35,19.06,30.69,28.43a53.55,53.55,0,0,0,13.78,8.75c5.49,2.54,7.87,7.27,6.44,12.51a5.87,5.87,0,0,1-3.33,4.07,16,16,0,0,1-8.15,1.64c-2.64-.21-5.12-1.06-6.39-3.54-4.57-8.93-12.06-14.92-20.17-20.29-4.93-3.26-9.66-6.9-15.23-9.1A3.89,3.89,0,0,0,108.37,158.55Z"
              style={{ fill: Stick ? `#FFFFFF` : `#037ef3` }}
            />
          </g>
        </g>
      </svg>
    );
  };
  return (
    <div>
      <Header>
        {" "}
        <Menu
          className="header-container"
          fixed="top"
          borderless
          style={Stick ? StickedMenu : unStickedMenu}>
          <Container text>
            <Menu.Item className="transition-all">{aiesecMan()}</Menu.Item>
            <Menu.Item
              header
              className="transition-all"
              style={Stick ? stickedFont : unStickedFont}>
              oGET Image Maker
            </Menu.Item>
          </Container>
        </Menu>
      </Header>
    </div>
  );
}

export default HeaderView;

// export default class Header extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {};
// 	}
// 	componentDidMount() {}

// 	render() {
// 		return (
// 			<>
// 				<div
// 					style={{
// 						position: "sticky",

// 						height: "4rem",
// 						display: "flex",
// 						alignItems: "flex-end",
// 						zIndex: 99,
// 					}}
// 				>
// 					<h1
// 						style={{
// 							marginBottom:
// 							opacity: 1,
// 							zIndex: 100,
// 						}}
// 					>
// 						Testing
// 					</h1>
// 					<div
// 						style={{
// 							backgroundColor: `#037EF3`,
// 							height: "4rem",
// 							width: "100%",
// 							position: "absolute",
// 							opacity:
// 								Math.abs(Math.round(this.props.Pos)) < 2 * 14
// 									? Math.round(-this.props.Pos) / (2 * 14)
// 									: 1,
// 						}}
// 					></div>
// 				</div>
// 				<div
// 					className="headercover"
// 					style={{
// 						opacity:
// 							Math.abs(Math.round(this.props.Pos)) < 2 * 14
// 								? Math.round(-this.props.Pos) / (2 * 14)
// 								: 1,
// 						backgroundColor: `#037EF3`,
// 					}}
// 				></div>
// 			</>
// 		);
// 	}
// }
