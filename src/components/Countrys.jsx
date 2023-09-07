import React from 'react'
import Country from './Country';
const Countrys = (props) => {
    const { countrys } = props
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-28'>
            {
                countrys.map((country) => <Country removeCountry={props.removeCountry} country={country} key={country.name.common} />)
            }
        </div>
    )
}

export default Countrys