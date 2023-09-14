import React from 'react'
import {foods} from "../contants";

const Food = () => {
  return (
    <div>
      {foods?.map(item => (
        <div key={item.id}>
          <p className={'font-sansCJK_JP'}>
            {item?.name}
          </p>
          <img src={item?.image} alt={item?.name}/>
        </div>
      ))}
    </div>
  )
}

export default Food