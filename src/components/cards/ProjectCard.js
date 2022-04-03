import React from "react";

export default function ProjectCard({name,text,cover}) {

    return (
        <div className="card project-card">
            <div className="card-body" >
                <h5 className="card-title">{name}</h5>
                <p className="card-text">
                   {text}
                </p>
            </div>
            <div className="card-footer">
                <img src={cover} alt="" />
            </div>
        </div>
    );
}
