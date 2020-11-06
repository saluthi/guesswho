import { useState, useEffect } from 'react';

export default function Face(props) {
  const [flipped, setFlipped] = useState(false)

  const flip = () => setFlipped(!flipped)
  const reset = () => setFlipped(false)

  useEffect(() => {
    props.events.on('reset', reset)
  },[props,reset])


  return (
    <div className={`face ${flipped ? 'flipped' : ''}`}
      onClick={flip}
    >
      <img alt={props.name}
        src={`/images/${props.imagePath}`}
      />
      <p className="name">{ props.name }</p>
    </div>
  )
}