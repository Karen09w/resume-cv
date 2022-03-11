import React from "react";
import { Link } from "react-router-dom";


export default function Movies() {
    const movieId = "jfdkslfjkd";
    return (
        <main>
            <div className="container">
                <h2 className="example-title">movie page section</h2>
            </div>
            <Link to={`/movies/${movieId}`} className="btn btn-primary">
                movie details
            </Link>
        </main>
    );
}
