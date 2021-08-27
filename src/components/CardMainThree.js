import React from 'react'

function CardMain_(props) {
  return (
    <div className="peer w-100 cardMain hCard">
      {props.children}
    </div>
  );
}

export default CardMain_;