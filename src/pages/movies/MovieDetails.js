import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function MovieDetails() {
    const params = useParams();

    return (
        <main>
            <div className="container">
                <h2 className="example-title">movie details page section</h2>
                id: "{params.movieId}"
                <Link to={`/movies`} className="btn btn-primary">
                    return
                </Link>
            </div>
        </main>
    );
}
