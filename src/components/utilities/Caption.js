import React from 'react';
import Cite from './Cite'

const Caption = (props) => {
  return (
    <figcaption className="blockquote-footer mt-3">
    {props.name},{" "}
    <Cite title ={props.title} />
  </figcaption>
  )
}

export default Caption;