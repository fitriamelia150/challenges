import React from 'react';
import HeaderComp from './HeaderComp/HeaderComp';
import BannerComp from './BannerComp/BannerComp';
import ContentComp from './ContentComp/ContentComp';
import FooterComp from './FooterComp/FooterComp';

const IndexComp = () => {
	return 	<div>
				<HeaderComp />
				<BannerComp />
				<ContentComp />
				<FooterComp />
			</div>
}

export default IndexComp