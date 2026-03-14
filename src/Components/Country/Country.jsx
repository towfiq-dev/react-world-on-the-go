import React, { useState } from 'react';
import './Country.css'

const Country = ({country}) => {
  const [visit, setVisit] = useState(false);
const clickHandle=()=>{
  if(visit === true){
    setVisit(false)
  }else{
    setVisit(true)
  }
}
  return (
    <div className={`country-style ${visit && 'country-visited' }`}>
    <h2>Country Name: {country.name.common}</h2>
    <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
    <p>Country Official: {country.name.official}</p>
    <p>Country Capital: {country.capital.capital}</p>
    <p>Country Region: {country.region.region}</p>
    <p>Country Languages: {country.languages.languages.eng}</p>
    <p>Country Area: {country.area.area} {country.area.area > 300000? '(Large Country)': '(Small Country)'}</p>
    <p>Country Population: {country.population.population}</p>
    <p>Country Continents: {country.continents.continents}</p>
    <button className='btn' onClick={()=> clickHandle()}>{visit? 'Visited': 'Not Visited' }</button>
    </div>
  );
};

export default Country;