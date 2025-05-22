import React from 'react';
import './ContentComp.css';
import {iconLight, iconDollar, iconPerson, ImageSlayer} from './../../assets/images/Images';

const ContentComp = () => {
	return 	<div className='content'>
				<div className="content-issue">
					<div className="content-line"></div>
					<h1>we're different</h1>

					<div className="card">
						<div className="content-card">
							<img src={iconLight} alt="" />
							<h2>Snappy Process</h2>
							<p>Our application process can be completed in minutes, not hours. Don't waste more time in the app!</p>
						</div>
						<div className="content-card">
							<img src={iconDollar} alt="" />
							<h2>Affordable Prices</h2>
							<p>We don't want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.</p>
						</div>
						<div className="content-card">
							<img src={iconPerson} alt="" />
							<h2>People First</h2>
							<p>Our plans aren't full of conditions and clauses to prevent payouts. We make sure you're covered when you need it.</p>
						</div>
					</div>
				</div>
				<div className="content-slayer">
					<h1>Find out more about how we work</h1>
					<button>How we work</button>
					<img src={ImageSlayer} alt="" />
				</div>
			</div>
}

export default ContentComp