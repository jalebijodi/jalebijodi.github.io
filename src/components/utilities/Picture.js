import React from 'react';
import Image from "react-bootstrap/Image";

const Picture = (props) => {
  return (
     <Image src={props.url} className='w-100' />
  )
}

export default Picture;