import React from 'react'

export default function Details(props){
  return (
      <div className='movie-details'>
          <figure>
          <img src={`${'https://www.themoviedb.org/t/p/w440_and_h660_face'+props.self.poster_path}`} alt='movie poster'/>
          </figure>
          <aside>
              <h1>{props.self.title}</h1>
              <small>Release Date: {props.self.release_date}</small>
              <p>User Score: {props.self.vote_average} | Popularity: {props.self.popularity}</p>
              <p>Overview</p>
              <p>{props.self.overview}</p>
          </aside>
      </div>
  )
}