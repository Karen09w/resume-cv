import React from "react";
import { Login, Home, About, Movies, MovieDetails, Error } from ".";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoutes } from "../components";
// import { Navigate } from "react-router-dom";

export default function routes(isAuthenticated) {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />

            <Route element={<ProtectedRoutes isAuthenticated={isAuthenticated} />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/movies/:movieId" element={<MovieDetails />} />
            </Route>

            <Route path="*" element={<Error />} />
        </Routes>
    );
    // if (isAuthenticated) {
    //     return (
    //         <>
    //             <Header />
    //             <Routes>
    //                 <Route path="/" element={<Home />} />
    //                 <Route path="/about" element={<About />} />
    //                 <Route path="*" element={<Error />} />
    //             </Routes>
    //             <Footer />
    //         </>
    //     );
    // }
    // return (
    //     <Routes>
    //         <Route path="/login" element={<Login />} />
    //         <Route path="/register" element={<Register />} />
    //         <Route path="*" element={<Error />} />
    //     </Routes>
    // );
}
