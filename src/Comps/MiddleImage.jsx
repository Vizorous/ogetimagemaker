import React, { PureComponent } from "react";
import imgMnt from "../Assets/mnt1.jpg";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default class MiddleImage extends PureComponent {
	constructor(props) {
		super(props);
		console.log(props);

		this.state = {};
	}

	render() {
		return (
			<div
				style={{
					height: `${this.props.sizeControl * 1312}px`,
					width: `${this.props.sizeControl * 1312}px`,
					marginTop: `${this.props.sizeControl * 344}px`,
					marginLeft: `${this.props.sizeControl * 344}px`,
					position: "absolute",
				}}>
				<TransformWrapper
					defaultScale={1}
					options={{
						limitToWrapper: true,
						limitToBounds: true,
						centerContent: true,
					}}
					positionX={this.props.positionX}
					positionY={this.props.positionY}
					onPanningStop={params => {
						// debugger;
					}}
					onZoomChange={params => {
						console.log(params);
						this.props.setTransform(params.positionX, params.positionY, params.scale, 0, "linear");
					}}
					onPanning={params => {
						// console.log(params.positionX, params.positionY);
						console.log(this.midImageNode);
						const positionX = params.positionX;
						const positionY = params.positionY;
						this.props.setTransform(params.positionX, params.positionY, params.scale, 0, "linear");
						this.props.setParentState({ positionX, positionY });
					}}>
					{({
						zoomIn,
						zoomOut,
						resetTransform,
						setDefaultState,
						positionX,
						positionY,
						scale,
						setTransform,
						previousScale,
						setPositionY,
						setPositionX,
						options: { limitToBounds, transformEnabled, disabled, cent },
						...rest
					}) => {
						// console.log(arguments);
						// this.props.setParentState({ st: setTransform() });
						return (
							<React.Fragment>
								<TransformComponent>
									<img
										src={imgMnt}
										alt="test"
										id="midImg"
										onLoad={params => {
											// console.log(this.midImageNode);
											const height = this.props.midImageNode.current.naturalHeight;
											const width = this.props.midImageNode.current.naturalWidth;
											// console.log(height);
											console.log("testing");

											if (height <= width) {
												this.props.setParentState({
													midHeight: `${this.props.sizeControl * 1312}px`,
												});
												this.props.setParentState({ midWidth: "auto" });
												// this.props.setParentState({type:})
												// debugger;
											} else {
												// debugger;
												this.props.setParentState({
													midWidth: `${this.props.sizeControl * 1312}px`,
												});
												this.props.setParentState({ midHeight: "auto" });
											}
											setTimeout(() => {
												setPositionY(0, 0, 0, "linear");
												setPositionX(0, 0, 0, "linear");
											}, 300);
										}}
										style={{
											height: `${this.props.midHeight}`,
											width: `${this.props.midWidth}`,
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
