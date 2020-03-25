import React, { PureComponent } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default class MiddleImage extends PureComponent {
  constructor(props) {
    super(props);
    this.midImageNode = React.createRef();
    this.outImageNode = React.createRef();

    this.state = {
      posX: 0,
      posY: 0,
      setPositionX: params => {
        return;
      },
      setPositionY: params => {
        return;
      },
      setTransform: params => {
        return;
      },
    };
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log("updated");
  }

  render() {
    return (
      <div>
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
            onZoomChange={params => {
              console.log(params);
              this.state.setTransform(
                (2000 * params.positionX) / 1312.0,
                (2000 * params.positionY) / 1312.0,
                params.scale,
                0,
                "linear"
              );
            }}
            pan={{
              animationTime: 0,
              // padding: false,
              velocityBaseTime: 0,
              paddingSize: 0,
            }}
            scalePadding={{
              paddingSize: 0,
            }}
            onPanning={params => {
              // console.log(params.positionX, params.positionY);
              //   console.log(this.midImageNode);
              const positionX = params.positionX;
              const positionY = params.positionY;
              this.state.setTransform(
                (2000 * params.positionX) / 1312.0,
                (2000 * params.positionY) / 1312.0,
                params.scale,
                0,
                "linear"
              );
              this.setState({ positionX, positionY });
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
              return (
                <React.Fragment>
                  <TransformComponent>
                    <img
                      src={`${this.props.image}`}
                      alt="test"
                      id="midImg"
                      onLoad={params => {
                        // console.log(this.midImageNode);
                        const height = this.midImageNode.current.naturalHeight;
                        const width = this.midImageNode.current.naturalWidth;
                        this.setState({ height, width });
                        // console.log(height);
                        // console.log("testing");
                        this.setState({ positionX, positionY });

                        setTimeout(() => {
                          setPositionY(0, 0, 0, "linear");
                          setPositionX(0, 0, 0, "linear");
                        }, 300);
                      }}
                      style={{
                        height:
                          this.state.height <= this.state.width
                            ? `${this.props.sizeControl * 1312}px`
                            : `${((this.props.sizeControl * 1312) /
                                this.state.width) *
                                this.state.height}px`,
                        width:
                          this.state.height >= this.state.width
                            ? `${this.props.sizeControl * 1312}px`
                            : `${((this.props.sizeControl * 1312) /
                                this.state.height) *
                                this.state.width}px`,
                      }}
                      ref={this.midImageNode}
                    />
                  </TransformComponent>
                </React.Fragment>
              );
            }}
          </TransformWrapper>
        </div>
        <div
          style={{
            height: `${this.props.sizeControl * 2000}px`,
            width: `${this.props.sizeControl * 2000}px`,
            margin: "auto",
            // marginTop: `${this.props.sizeControl * 344}px`,
            position: "absolute",
            zIndex: "-4",
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
              return (
                <React.Fragment>
                  <TransformComponent>
                    <div>
                      <div
                        style={{
                          position: "absolute",
                          // height:
                          // 	this.state.height <= this.state.width
                          // 		? `${this.props.sizeControl * 2000}px`
                          // 		: "auto",
                          // width:
                          // 	this.state.height >= this.state.width
                          // 		? `${this.props.sizeControl * 2000}px`
                          // : "auto",
                          // backgroundColor: `${this.props.bgColor}`,
                        }}>
                        <img
                          // style={{ }}
                          src={`${this.props.image}`}
                          alt="test"
                          id="outImg"
                          onLoad={params => {
                            // console.log(this.midImageNode);
                            // const height = this.outImageNode.current
                            //   .naturalHeight;
                            // const width = this.outImageNode.current
                            //   .naturalWidth;
                            // console.log(height);

                            // if (height <= width) {
                            //   this.setState({
                            //     outHeight: `${this.props.sizeControl * 2000}px`,
                            //   });
                            //   this.setState({ outWidth: "auto" });
                            //   // debugger;
                            // } else {
                            //   // debugger;
                            //   this.setState({
                            //     outWidth: `${this.props.sizeControl * 2000}px`,
                            //   });
                            //   this.setState({ outHeight: "auto" });
                            // }
                            setTimeout(() => {
                              resetTransform();

                              //   console.log("ssdf");

                              this.setState({ st: setPositionX }, params => {
                                this.state.st(40, 0, 0, "linear");
                              });
                              this.setState(
                                { setPositionX, setPositionY, setTransform },
                                params => {
                                  this.state.setPositionX(0, 0, 0, "linear");
                                  this.state.setPositionY(0, 0, 0, "linear");
                                }
                              );
                            }, 300);
                          }}
                          // eslint-disable-next-line react/jsx-no-duplicate-props
                          style={{
                            height:
                              this.state.height <= this.state.width
                                ? `${this.props.sizeControl * 2000}px`
                                : `${((this.props.sizeControl * 2000) /
                                    this.state.width) *
                                    this.state.height}px`,
                            width:
                              this.state.height >= this.state.width
                                ? `${this.props.sizeControl * 2000}px`
                                : `${((this.props.sizeControl * 2000) /
                                    this.state.height) *
                                    this.state.width}px`,
                          }}
                          ref={this.outImageNode}
                        />
                      </div>
                    </div>
                  </TransformComponent>
                </React.Fragment>
              );
            }}
          </TransformWrapper>
        </div>
        <div
          style={{
            position: "absolute",

            height:
              // this.state.height <= this.state.width
              // ?
              `${this.props.sizeControl * 2000}px`,
            // : "auto"
            width:
              // this.state.height >= this.state.width
              // ?
              `${this.props.sizeControl * 2000}px`,
            // : "auto"
            backgroundColor: `${this.props.bgColor}`,
            zIndex: "-2",
          }}></div>
      </div>
    );
  }
}
