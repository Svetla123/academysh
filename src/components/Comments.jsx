import React from "react";

export default function Comments(props) {
    return (
        <section id="about">
            <div className="row">
                <div className="three columns">
                    <img
                        className="profile-pic"
                        src={props.comment.profilepic}
                        alt="Tim Baker Profile Pic"
                    />
                </div>
                <div className="nine columns main-col border">
                    <p className="comment">"{props.comment.text}"</p>
                    <div className="row">
                        <div className="columns contact-details">
                            <p className="address">
                                <span className="author-comment">
                                    {props.comment.author}
                                </span>
                                , <span>{props.comment.date}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
