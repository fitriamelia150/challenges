import React from "react";

const Post = (props) => {
    return (
        <div className="post">
                    <div className="img-thumb">
                        <img src="https://source.unsplash.com/200x150?programmer" alt="" />
                    </div>

                    <div className="content">
                        <p className="title">{props.title}</p>
                        <p className="desc">{props.desc}</p>
                        <button className="remove">Remove</button>
                    </div>
                </div>
    )
}

export default Post;