import React from 'react';
import './YoutubeComponent.css';

const YoutubeComponent = (props) => {
	return (
		<div className='youtube-wrapper'>
			<div className='img-thumb'>
				<img src="https://i.ytimg.com/vi/_hopxgcz1AA/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD3QDN-r5_W6XOQOMmhQ-HV4SUozQ" alt="thumbnail youtube prawito hudoro" />
				<p className='time'>{props.time}</p>
			</div>
			<p className='title'>{props.title}</p>
			<p className='desc'>{props.desc}</p>
		</div>
	)
}

YoutubeComponent.defaultProps = {
	time: '00:00',
	title: 'title here'
}

export default YoutubeComponent;