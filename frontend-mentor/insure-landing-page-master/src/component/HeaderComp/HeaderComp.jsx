import React from 'react';
import './HeaderComp.css'
import {ImageLogo, ImageMenu} from './../../assets/images/Images';

const HeaderComp = () => {
	return <nav>
				<img src={ImageLogo} alt="" />
				<div className="links hide">
					<a href="#">how we work</a>
					<a href="#">blog</a>
					<a href="#">account</a>
					<a href="#">view plans</a>
				</div>
				<div className="menu">
					<img src={ImageMenu} alt="" />
				</div>
			</nav>
}

export default HeaderComp