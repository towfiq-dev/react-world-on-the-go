import { Suspense } from 'react'
import './App.css'
import Countries from './Components/Countries/Countries'
  const countriesFetch = async()=>{
  const url = 'https://openapi.programming-hero.com/api/all'
  const countriesData = await fetch(url)
  return countriesData.json()
  }
function App() {
const countriesPromise = countriesFetch()
  return (
    <div>
    <Suspense fallback={<p>Please wait data is loading...</p>}>
      <Countries 
      countriesPromise = {countriesPromise}
      ></Countries>
    </Suspense>
    </div>
  )
}

export default App
