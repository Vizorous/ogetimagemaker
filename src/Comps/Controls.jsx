import React from "react";
import { Form, Radio, Button } from "semantic-ui-react";
import { useDropzone } from "react-dropzone";
export default function Controls(
	// }
	props,
) {
	const { getRootProps, getInputProps } = useDropzone({
		accept: "image/*",
		multiple: false,
		onDrop: acceptedFiles => {
			acceptedFiles.map(file =>
				props.handleChange(URL.createObjectURL(file), "image"),
			);
		},
	});

	return (
		<>
			<Form onSubmit={props.handleSubmit}>
				<Form.Group>
					{props.FORM_TEXT_DATA.map((item, index) => {
						if (item.type === "oppName") {
							return (
								<Form.TextArea
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
								key={item.key}
								value={props[item.type]}
								{...item.desc}
								onChange={e => {
									props.handleChange(e.target.value, item.type);
								}}
							/>
						);
					})}
				</Form.Group>
				<Form.Group>
					{props.FORM_CHECKBOX_DATA.map((item, index) => {
						return (
							<Form.Checkbox
								key={item.key}
								label={item.label}
								checked={props[item.type]}
								onChange={() => {
									props.handleToggle([item.type]);
									console.log(props[item.type]);
								}}
							></Form.Checkbox>
						);
					})}
					<span style={{ marginLeft: "1em", marginRight: "1em" }}> | </span>

					<Form.Radio
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
						label="oGT"
						name="radioGroup"
						value="oGT"
						checked={props.OGETSwitch === "oGT"}
						onChange={props.handleOGETSwitch}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Checkbox
						label="Custom No."
						checked={props.phoneSwitch}
						onChange={() => {
							props.handleToggle("phoneSwitch");
						}}
					></Form.Checkbox>
					<Form.Input
						value={props.phoneNo}
						placeholder={"Input Phone No."}
						disabled={!props.phoneSwitch}
						onChange={e => {
							props.handleChange(e.target.value, "phoneNo");
						}}
					/>
					<span style={{ marginLeft: "1em", marginRight: "1em" }}> | </span>
					<div {...getRootProps({ className: "dropzone" })}>
						<input {...getInputProps()} />
						<p>Drag 'n' drop/click to select images</p>
					</div>
				</Form.Group>
				<div style={{ display: "flex", justifyContent: "center" }}>
					<Button
						// className="m1"
						type="primary"
						size="large"
						onClick={props.handleGenerate}
					>
						GENERATE
					</Button>
					<Button
						className="m1"
						type="primary"
						size="large"
						onClick={props.handleClear}
					>
						RESET
					</Button>
				</div>
			</Form>
		</>
	);
}
