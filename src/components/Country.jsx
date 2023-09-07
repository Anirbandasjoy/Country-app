import React from 'react';


const Country = ({ country, removeCountry }) => {
    const handleRemoveCountry = (name) => {
        removeCountry(name);

    };

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={country.flags.png} alt={country.name.common} className="rounded-xl w-44 h-44" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Name : {country.name.common}</h2>
                <p>Region : {country?.region}</p>
                <div className="card-actions">
                    <button onClick={() => handleRemoveCountry(country.name.common)} className="btn btn-primary hover:bg-red-600 hover:outline-none">Remove Country</button>

                </div>
            </div>
        </div>
    );
};

export default Country;
