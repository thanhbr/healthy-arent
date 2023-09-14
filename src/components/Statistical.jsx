import React from 'react'
import LineChart from './Charts/LineChart'

const Statistical = () => {
  return (
    <section className='container-page mt-[72px]'>
      <div className='grid grid-cols-3'>
         
      </div>

     <div className='h-[304px]'>
      <LineChart  />
     </div> 

     <div>
      <Exercise />
     </div>
    </section>
  )
}

export default Statistical

const Exercise = () => { 
  return (
    <div>
       <div>
        <p>MY EXERCISE</p>
        <p>2021.05.21</p>
       </div>
    </div>
  )
}