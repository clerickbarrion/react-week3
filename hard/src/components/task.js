import React from 'react'

export default function Task(props) {

  function edit(){
    props.navigate('/edit', {state: props.self})
  }

  return (
    <div>
      <p>{props.self.name}</p>
      <button onClick={edit}>See Details or Edit</button>
    </div>
  )
}
