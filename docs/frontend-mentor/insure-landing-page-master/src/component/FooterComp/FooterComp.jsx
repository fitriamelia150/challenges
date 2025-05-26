import React from 'react';
import './FooterComp.css';
import {ImageLogo, ImgaeFb, ImageTwitter, ImagePinterest, ImageInstagram} from './../../assets/images/Images';

const FooterComp = () => {
	return 	<footer>
				<div className="footer-1">
					<img src={ImageLogo} alt="" />
					<div className="social">
						<img src={ImgaeFb} alt="" />
						<img src={ImageTwitter} alt="" />
						<img src={ImagePinterest} alt="" />
						<img src={ImageInstagram} alt="" />
					</div>
				</div>

				<div className="footer-2">
					<div className="col-1">
						<p>our company</p>
						<p>how we work</p>
						<p>why insure?</p>
						<p>view plans</p>
						<p>reviews</p>
					</div>

					<div className="col-2">
						<p>help me</p>
						<p>faq</p>
						<p>terms of use</p>
						<p>privacy policy</p>
						<p>cookies</p>
					</div>

					<div className="col-3">
						<p>contact</p>
						<p>sales</p>
						<p>support</p>
						<p>live chat</p>
					</div>

					<div className="col-4">
						<p>others</p>
						<p>careers</p>
						<p>press</p>
						<p>licenses</p>
					</div>
				</div>
			</footer>
}

export default FooterComp