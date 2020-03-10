import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MytinLanding from "./img/MYtineraryLogo.png";

export default class MultipleRows extends Component {
	render() {
		const settings = {
			className: "center",
			centerMode: true,
			infinite: true,
			centerPadding: "60px",
			slidesToShow: 3,
			speed: 500,
			rows: 2,
			slidesPerRow: 2
		};
		return (
			<div>
				<h2>Multiple Rows</h2>
				<Slider {...settings}>
					<div>
						<img src={MytinLanding} />
					</div>
					<div>
						<img src={MytinLanding} />
					</div>
					<div>
						<img src={MytinLanding} />
					</div>
					<div>
						<img src={MytinLanding} />
					</div>
					<div>
						<img src={MytinLanding} />
					</div>
					<div>
						<img src={MytinLanding} />
					</div>
					<div>
						<img src={MytinLanding} />
					</div>
					<div>
						<img src={MytinLanding} />
					</div>
					<div>
						<img src={MytinLanding} />
					</div>
					<div>
						<img src={MytinLanding} />>
					</div>
					<div>
						<img src={MytinLanding} />>
					</div>
					<div>
						<img src={MytinLanding} />>
					</div>
					<div>
						<img src={MytinLanding} />>
					</div>
					<div>
						<img src={MytinLanding} />>
					</div>
					<div>
						<img src={MytinLanding} />>
					</div>
					<div>
						<img src={MytinLanding} />>
					</div>
				</Slider>
			</div>
		);
	}
}
