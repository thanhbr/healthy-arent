import React from 'react'
import {foods} from "../contants";

const Food = () => {
  return (
    <div>
      {foods?.map(item => (
        <>
          <h3
            key={item.id}
            className={'font-sansCJK_JP'}
          >
            {item?.name}
          </h3>
          <img src={item?.image} alt={item?.name}/>
        </>
      ))}
    </div>
  )
}

export default Food