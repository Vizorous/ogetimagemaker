import React from "react";
import {
  Form,
  Radio,
  Button,
  Container,
  Header,
  Divider,
} from "semantic-ui-react";
import { useDropzone } from "react-dropzone";
export default function Controls(
  // }
  props
) {
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    multiple: false,
    onDrop: acceptedFiles => {
      acceptedFiles.map(file =>
        props.handleChange(URL.createObjectURL(file), "image")
      );
    },
  });

  return (
    <>
      <Form
        onSubmit={props.handleSubmit}
        className="form-container"
        // size={"large"}
      >
        <Container fluid>
          <Header>Text Controls</Header>
          <Form.Field
          //   fluid
          //   inline
          // width="equal"
          >
            {props.FORM_TEXT_DATA.map((item, index) => {
              if (item.type === "oppName") {
                return (
                  <Form.TextArea
                    //   inline
                    key={item.key}
                    rows={2}
                    value={props[item.type]}
                    {...item.desc}
                    onChange={e => {
                      props.handleChange(e.target.value, item.type);
                    }}
                  />
                );
              }

              return (
                <Form.Input
                  disabled={
                    item.type === "salary"
                      ? props.salarySwitch === false
                        ? true
                        : false
                      : false
                  }
                  // inline
                  key={item.key}
                  value={props[item.type]}
                  {...item.desc}
                  onChange={e => {
                    props.handleChange(e.target.value, item.type);
                  }}
                />
              );
            })}
          </Form.Field>
        </Container>
        <Divider
          style={{
            width: "90%",
            margin: "1rem auto 1.5rem auto",
          }}></Divider>
        <Container>
          <Header> Detail Switches</Header>
          <Form.Group className="checkbox-container">
            {props.FORM_CHECKBOX_DATA.map((item, index) => {
              return (
                <Form.Checkbox
                  className="checkboxes"
                  style={{}}
                  key={item.key}
                  label={item.label}
                  checked={props[item.type]}
                  onChange={() => {
                    props.handleToggle([item.type]);
                    console.log(props[item.type]);
                  }}></Form.Checkbox>
              );
            })}
          </Form.Group>
        </Container>
        <Divider
          style={{
            width: "90%",
            margin: "1rem auto 1.5rem auto",
          }}></Divider>
        <Container>
          <Header>Phone No. Details</Header>
          <div style={{ display: "flex" }}>
            <Form.Group inline>
              <Form.Radio
                className="checkboxes"
                label="oGE"
                name="radioGroup"
                value="oGE"
                checked={props.OGETSwitch === "oGE"}
                onChange={props.handleOGETSwitch}
                // onChange={() => {
                // 	props.handleOGETSwitch(!props.OGETSwitch);
                // }}
              />
              <Radio
                className="checkboxes"
                label="oGT"
                name="radioGroup"
                value="oGT"
                checked={props.OGETSwitch === "oGT"}
                onChange={props.handleOGETSwitch}
              />
            </Form.Group>
            <Form.Group style={{ marginLeft: "1rem" }}>
              <Form.Checkbox
                className="checkboxes phoneno-checkbox"
                label="Custom No."
                checked={props.phoneSwitch}
                onChange={() => {
                  props.handleToggle("phoneSwitch");
                }}></Form.Checkbox>
              <Form.Input
                style={{ width: "fit-content" }}
                // label={"Use Custom No."}
                // inline
                value={props.phoneNo}
                placeholder={"Input Phone No."}
                disabled={!props.phoneSwitch}
                onChange={e => {
                  props.handleChange(e.target.value, "phoneNo");
                }}
              />
            </Form.Group>
          </div>
        </Container>
        <Divider
          style={{
            width: "90%",
            margin: "1rem auto 1.5rem auto",
          }}></Divider>
        <Container>
          <Header>Upload Images</Header>
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop/click to select images</p>
          </div>
        </Container>
        <Divider
          style={{
            width: "90%",
            margin: "1rem auto 1.5rem auto",
          }}></Divider>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            margin: "1rem",
          }}>
          <Button
            color="blue"
            disabled={props.disableGen}
            // style={{ backgroundColor: "#037ef3" }}
            // className="m1"
            primary
            size="large"
            onClick={props.handleGenerate}>
            GENERATE
          </Button>
          <Button
            className="m1"
            type="primary"
            size="large"
            onClick={props.handleClear}>
            RESET
          </Button>
        </div>
      </Form>
    </>
  );
}
