import React from 'react'

function BtnSelect({ listCampaign }) {
  return (
    <select className="form-select col-12 border-dark" aria-label="Default select example">
      {listCampaign.map((Campaign, index )=>{
        return <option value={index} key={index}>{Campaign}</option>;
      })}
    </select>
  );
}export default BtnSelect;