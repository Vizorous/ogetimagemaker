import React, { Component } from 'react';
import TempImage from '../Assets/temp.png';
import './GeneratedImage.css';
import { Input } from 'semantic-ui-react';

export default class GeneratedImage extends Component {
	constructor(props) {
		super(props);

		this.imageNodeRef = React.createRef();
		this.state = {
			country: 'Russia',
			sizeControl: 0.3
		};
	}
	handleChange = (event) => {
		this.setState({ country: event.target.value });
	};

	render() {
		return (
			<div>
				<Input value={this.state.country} onChange={this.handleChange} />
				<div
					style={{
						backgroundColor: '#303030',
						height: `${this.state.sizeControl * 2000}px`,
						width: `${this.state.sizeControl * 2000}px`
					}}
					ref={this.imageNodeRef}
				>
					<div
						className="background"
						style={{
							backgroundImage: `url(${TempImage})`,
							height: `${this.state.sizeControl * 2000}px`,
							width: `${this.state.sizeControl * 2000}px`,
							backgroundSize: 'contain'
						}}
					>
						<div className="container">
							<div
								className="container-text-location"
								style={{
									marginLeft: `${this.state.sizeControl * 140}px`,
									marginTop: `${this.state.sizeControl * 460}px`,
									fontSize: `${this.state.sizeControl * 234}px`,
									textShadow: `0 ${this.state.sizeControl * 8}px ${this.state.sizeControl *
										10}px rgba(0, 0, 0, 0.4)`
								}}
							>
								<p className="text-internship">Internship</p>
								<p className="text-country" style={{ marginTop: `-${this.state.sizeControl * 70}px` }}>
									in {this.state.country}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
