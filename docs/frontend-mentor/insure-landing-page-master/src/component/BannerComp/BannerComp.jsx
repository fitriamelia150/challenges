import React from 'react';
import './BannerComp.css';
import {ImageBannerMobile, OrmLeftMobile, OrmRightMobile } from './../../assets/images/Images';

const BannerComp = () => {
	return <div className="banner">
				<img src={ImageBannerMobile} className="image-banner" alt="ImageBanner" />
				<div className="banner-detail">
					<div className="banner-line hide"></div>
					<h1>Humanizing your insurance.</h1>
					<p>Get your life insurance coverage easier and faster. We blend our expertise
					and technology to help you find the plan that's right for you. Ensure you and your loved ones are protected.</p>
					<button>View plans</button>
					<img src={OrmLeftMobile} className="orm-left" alt="" />
					<img src={OrmRightMobile} className="orm-right" alt="" />
				</div>
			</div>
}

export default BannerComp