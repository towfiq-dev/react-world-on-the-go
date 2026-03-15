import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countriesPromise}) => {
  const countriesData = use(countriesPromise)
  const countries = countriesData.countries;
  const [visitedCountries, setVisitedCountries] = useState([]);
  const handleVisitedCountries=(country)=>{
  const newVisitedCountries = [...visitedCountries, country]
  setVisitedCountries(newVisitedCountries)
  }
  return (
    <section>
      <h1 style={{color: 'red', marginBottom: '50px'}}>In The Countries{Countries}</h1>
      <h2>Total Country Visited: {visitedCountries.length}</h2>
      <ol>
        {
          visitedCountries.map(country => <li 
          key={country.ccn3.ccn3}
          >{country.name.common}</li> 
          
        )
        }
      </ol>
      <div className='flags'>
        {
          visitedCountries.map(country => <img src={country.flags.flags.png} alt="" /> )
        }
      </div>
      <div className='countries-style'>
        {
        countries.map(country=> <Country
        key={country.ccn3.ccn3}
          country = {country}
          handleVisitedCountries = {handleVisitedCountries}
        ></Country>)
      }
      </div>
      
    </section>
  );
};

export default Countries;