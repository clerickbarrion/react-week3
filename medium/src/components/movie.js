import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Details from '../Details'

export default function Movie(props){
    return (
        <>
        <Router>
            <li>
                <Link to={'/movie'}>
                <figure>
                    <figcaption><p>{props.self.title}</p></figcaption>
                    <img src={`${'https://www.themoviedb.org/t/p/w440_and_h660_face'+props.self.poster_path}`} alt='movie poster'/>
                </figure>
                </Link>
            </li>
            <Routes>
                <Route path={'/movie'} element={<Details self={props.self}/>}/>
            </Routes>
        </Router>
        </>
    )
}