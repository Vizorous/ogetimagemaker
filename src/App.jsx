import React, { useState } from "react";
import "./App.css";
import GeneratedImage from "./Comps/GeneratedImage";
import { Visibility, Container, Segment, Header } from "semantic-ui-react";
import HeaderView from "./Comps/HeaderView";

function App() {
  const [Stick, setStick] = useState(false);
  // const [menuFixed, setmenuFixed] = useState(false);
  // const stickTopMenu = () => setmenuFixed(true);
  // const unStickTopMenu = () => setmenuFixed(true);
  const stickMenu = () => setStick(true);
  const unStickMenu = () => setStick(false);

  return (
    <div
      className="App"
      // onScroll={param => console.log(appNode.current.scrollTop)}
    >
      <Visibility
        // onBottomPassed={stickMenu}
        // onBottomVisible={unStickMenu}
        onOffScreen={stickMenu}
        // continuous
        once={false}
        onOnScreen={unStickMenu}>
        <div
          style={{
            height: "0.5rem",
            width: "100%",
            marginBottom: "7rem",
          }}></div>
      </Visibility>
      <HeaderView Stick={Stick}></HeaderView>
      <div style={{ position: "relative" }}>
        <GeneratedImage
        // onScroll={params => console.log(appNode.current.scrollTop)}
        ></GeneratedImage>
      </div>
      <footer style={{ marginTop: "24px" }}>
        <Segment
          className="footer-segment"
          placeholder
          style={{
            // marginLeft: "-5px",
            // marginRight: "-5px",
            minHeight: "6rem",
            padding: "16px 56px",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "flex-end",
          }}>
          <div>
            <div style={{ display: "flex", alignItems: "baseline" }}>
              <h3 style={{ margin: 0 }}>oGET Image Maker</h3>
              <span style={{ marginLeft: "5px" }}> v1.0.2</span>
            </div>
            <h5 style={{ margin: 0, fontWeight: "500" }}>
              Production of Digital Experience Team
            </h5>
            <h5 style={{ margin: 0, fontWeight: "500" }}>
              AIESEC in Jayewardenepura
            </h5>
          </div>
          <div style={{ textAlign: "right" }}>
            {" "}
            <h6 style={{ margin: 0, lineHeight: "1.3em", fontWeight: "500" }}>
              Developed by
            </h6>
            <h5 style={{ margin: 0, lineHeight: "1.3em" }}>Vikum Wijekoon</h5>
            <h6 style={{ margin: 0, lineHeight: "1.3em" }}>LCVP - DXP</h6>
            <h6 style={{ margin: 0, lineHeight: "1.3em" }}> EB Wolves 20.21</h6>
          </div>
        </Segment>{" "}
        {/* <Container
          fluid
          style={{
            marginTop: "16px",
            height: "40px",
            backgroundColor: "#Ededed",
          }}><Container ></Container></Container> */}
      </footer>
    </div>
  );
}

export default App;
