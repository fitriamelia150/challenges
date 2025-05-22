import React, { Component } from "react";
// import YoutubeComponent from "../../component/YoutubeComp/YoutubeComponent";
// import Product from "../Product/Product";
// import LifeCycleComponent from "../LifeCycleComp/LifeCycleComponent";
import BlogPost from "../BlogPost/BlogPost";

class Home extends Component {

	state = {
		showComponent : true
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				showComponent : false
			})
		}, 1500)
	}

	render() {
		return <div>
					{/* <p>Youtube Component</p>
					<hr/>
					<YoutubeComponent
					time="7.12"
					title="Tutorial React - ReactJS for beginner"
					desc="tutorial ReactJs for beginner only 1 hour"/>
					<YoutubeComponent
					time="8.42"
					title="Tutorial React - Props and State"
					desc="using props and state for dynamic component"/>
					<YoutubeComponent
					time="1.13"
					title="Tutorial React - React Router"
					desc="React router for better apps"/>
					<YoutubeComponent
					time="9.23"
					title="Tutorial React - Redux"
					desc="simplify props using redux"/>
					<YoutubeComponent/> */}

					{/* <p>Counter</p>
					<hr/>
					<Product/> */}

					{/* <p>Life Cycle Component</p>
					<hr/>
					{
						this.state.showComponent ? <LifeCycleComponent/> : null
					} */}

					<p>Blog Post</p>
					<hr/>
					<BlogPost/>

				</div>;
	}
}

export default Home;