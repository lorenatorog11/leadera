import React from 'react'

function CardGeographical({ labelCardGeographical} ) {
  console.dir(labelCardGeographical.citys)
  return (
    <div className="w-100 d-flex flex-wrap">      
      {labelCardGeographical.citys.map((city, index )=>{
        return (     
        <div className="d-flex justify-content-center flex-column text-center p-2 col-4">
          <p className="mb-1">{city}</p>
          <h3>{labelCardGeographical.amount[index]}</h3>
        </div>);
      })}
    </div>
  );
}

export default CardGeographical;