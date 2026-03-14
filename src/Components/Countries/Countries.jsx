import React, { use } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countriesPromise}) => {
  const countriesData = use(countriesPromise)
  const countries = countriesData.countries;
  console.log(countries);
  
  return (
    <section>
      <h1 style={{color: 'red', marginBottom: '50px'}}>In The Countries{Countries}</h1>
      
      <div className='countries-style'>
        {
        countries.map(country=> <Country
        key={country.ccn3.ccn3}
          country = {country}

        ></Country>)
      }
      </div>
      
    </section>
  );
};

export default Countries;