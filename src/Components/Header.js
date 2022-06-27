import React from "react";
import TypeWriter from "react-typewriter";

const Header = ({ data }) => {
	if (data) {
		var name = data.name;
		var occupation = data.occupation;
		var description = data.description;
		var country = data.address.country;
		var networks = data.social.map(function (network) {
			return (
				<li key={network.name}>
					<a rel="noreferrer" target="_blank" href={network.url}>
						<i className={network.className}></i>
					</a>
				</li>
			);
		});
		const upwork = (
			<li>
				<a
					rel="noreferrer"
					target="_blank"
					href="https://www.upwork.com/freelancers/~019fe5841a0ad9dc30"
				>
					<img src="/images/upwork.png" width={30} height={30} alt="upwork" />
				</a>
			</li>
		);
		networks.splice(0, 0, upwork);
	}

	return (
		<header id="home">
			<nav id="nav-wrap">
				<a className="mobile-btn" href="#nav-wrap" title="Show navigation">
					Show navigation
				</a>
				<a className="mobile-btn" href="#home" title="Hide navigation">
					Hide navigation
				</a>

				<ul id="nav" className="nav">
					<li className="current">
						<a className="smoothscroll" href="#home">
							Home
						</a>
					</li>
					<li>
						<a className="smoothscroll" href="#about">
							About
						</a>
					</li>
					<li>
						<a className="smoothscroll" href="#resume">
							Resume
						</a>
					</li>
					<li>
						<a className="smoothscroll" href="#portfolio">
							Works
						</a>
					</li>
					<li>
						<a className="smoothscroll" href="#testimonials">
							Testimonials
						</a>
					</li>
					<li>
						<a className="smoothscroll" href="#contact">
							Contact
						</a>
					</li>
				</ul>
			</nav>

			<div className="row banner">
				<div className="banner-text">
					<h1 className="responsive-headline">
						<TypeWriter typing={0.5}>{name ? `I'm ${name}.` : null}</TypeWriter>
					</h1>
					<h3>
						Based in {country}. <span>{occupation}</span>. {description}.
					</h3>
					<hr />
					<ul className="social">{networks}</ul>
				</div>
			</div>

			<p className="scrolldown">
				<a className="smoothscroll" href="#about">
					<i className="icon-down-circle"></i>
				</a>
			</p>
		</header>
	);
};

export default Header;
