import React from 'react'

function BtnsSelectTime({ listTime }) {
  return (
    <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
      <div className="btn-group me-2" role="group" aria-label="First group">
        {listTime.map((Time, index )=>{
          return <button type="button" key={index} className="btn bg-white text-dark btn-color border border-dark">{Time}</button>;
        })}
      </div>
    </div> 
  );
}export default BtnsSelectTime;