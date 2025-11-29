import React  from 'react'

function TextSearch({value, onChange}) {
  return (
    <div>
        <h1> Search </h1>
        <input 
        type='text' 
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder='search here'/>
    </div>
  )
}

export default TextSearch