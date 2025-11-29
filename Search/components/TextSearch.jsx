import React  from 'react'

function TextSearch({value, onChange}) {
  return (
    <div className='textsearch'>
      <div className='header-search-title'>  
        <h1> Search </h1>
      </div>
      <div className='header-search-input' >
          <input 
          type='text' 
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder='search here'/>
        </div>
    </div>
  )
}

export default TextSearch