import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HashLoader from "react-spinners/HashLoader";
import Countrys from './components/Countrys';
import Search from './components/Search';

const url = "https://restcountries.com/v3.1/all";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [countrys, setCountrys] = useState([]);
  const [error, setError] = useState(null);

  const fetchCountries = async (url) => {
    setIsLoading(true);
    try {
      const response = await axios.get(url);
      setCountrys(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchCountries(url);
    }, 1000);
  }, []);

  const removeCountry = (name) => {
    const filteredCountries = countrys.filter((country) => country.name.common !== name);
    setCountrys(filteredCountries);
    toast("✅ remove successfully");

  }

  const searchCountry = (searchValue) => {
    const value = searchValue.toLowerCase();
    const searchCountrys = countrys.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value)
    });
    setCountrys(searchCountrys)
  }


  return (
    <div className='container mx-auto'>
      <Search onSearch={searchCountry} />
      {isLoading ? (
        <div className='flex justify-center items-center h-screen'>
          <HashLoader color="#36d7b7" />
        </div>
      ) : error ? (
        <div>ERROR :  {error}</div>
      ) : (
        <div>

          <Countrys countrys={countrys} removeCountry={removeCountry} />
          <ToastContainer />
        </div>

      )}
    </div>
  );
};

export default App;
