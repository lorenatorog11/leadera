import React from 'react'

function BtnSelect({ listCampaign }) {
  return (
    <select className="form-select col-12" aria-label="Default select example">
      {listCampaign.map((Campaign, index )=>{
        return <option value={index}>{Campaign}</option>;
      })}
    </select>
  );
}export default BtnSelect;