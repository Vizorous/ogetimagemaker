import React, { Component } from "react";
import { Image } from "semantic-ui-react";
import imgMnt from "../Assets/mnt1.jpg";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default class OuterImage extends Component {
	constructor(props) {
		super(props);
		this.midImageNode = React.createRef();

		this.state = {
			height: 300,
			width: "auto",
		};
	}

	render() {
		return (
			<div
				style={{
					height: `${this.props.sizeControl * 2000}px`,
					width: `${this.props.sizeControl * 2000}px`,
				}}>
				<TransformWrapper
					defaultScale={1}
					options={{
						limitToWrapper: true,
						limitToBounds: true,
						centerContent: true,
					}}
					onPanningStop={params => {
						// console.log(params);
					}}>
					{({
						zoomIn,
						zoomOut,
						resetTransform,
						setDefaultState,
						handleStopPanning,
						positionX,
						positionY,
						scale,
						previousScale,
						setTransform,
						options: { limitToBounds, transformEnabled, disabled, cent },
						...rest
					}) => {
						// console.log(arguments);
						this.setState({ st: setTransform });
						console.log("test");

						return (
							<React.Fragment>
								<TransformComponent>
									<img
										src={imgMnt}
										alt="test"
										id="midImg"
										onLoad={params => {
											// console.log(this.midImageNode);
											const height = this.midImageNode.current.naturalHeight;
											const width = this.midImageNode.current.naturalWidth;
											// console.log(height);

											if (height <= width) {
												this.setState({ height: `${this.props.sizeControl * 2000}px` });
												this.setState({ width: "auto" });
												// debugger;
											} else {
												// debugger;
												this.setState({ width: `${this.props.sizeControl * 2000}px` });
												this.setState({ height: "auto" });
											}
											setTimeout(() => {
												resetTransform();
											}, 300);
										}}
										style={{
											height: `${this.state.height}`,
											width: `${this.state.width}`,
										}}
										ref={this.midImageNode}
									/>
								</TransformComponent>
							</React.Fragment>
						);
					}}
				</TransformWrapper>
			</div>
		);
	}
}
