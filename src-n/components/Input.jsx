import React from 'react'

const Input = (props) => {
    const {divClass , lableClass , txtLabel, type,pl , inputClass} = props
  return (
    <div className={divClass}>
        <label className={lableClass}>{txtLabel}</label>
        <input type={type} placeholder={pl} className={inputClass}/>
    </div>
  )
}

export default Input