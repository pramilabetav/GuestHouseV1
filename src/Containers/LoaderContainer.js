import React from "react";

class LoaderContainer extends React.Component {
	render() {
		return (
			<div className="loader">
				< label className="loaderInfo" > Please wait, Data is loading... </label>
			</div>
		);
	}
}

export default LoaderContainer;
