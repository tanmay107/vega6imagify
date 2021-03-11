import React, { useState } from 'react';
import Image from './Image';
import ImageList from './ImageList';
import "./Search.css";
import axios from 'axios';

export default function Search() {

    const [searchText, setSearchText] = useState('');
    const [amount, setAmount] = useState(15);
    const [apiUrl, setApiUrl] = useState('https://pixabay.com/api');
    const [apiKey, setApiKey] = useState('2771712-7f90318221defc286540c6a67');
    const [images, setImages] = useState([]);

    const handleSearchInputChanges = (e) => {
        setSearchText(e.target.value);
      }
    
      const resetInputField = () => {
        setSearchText("")
      }

    const onSearchChange = () => {
        const val = searchText;
        if(val === ''){
            setImages([]);
        }else{
                axios
                  .get(
                    `${apiUrl}/?key=${apiKey}&q=${
                      val
                    }&image_type=photo&safesearch=true`
                  )
                  .then(res => setImages(res.data.hits))
                  .catch(err => console.log(err));
              }
              resetInputField();
            }

    return (
        <>
            <div className='pa2 tc'>
            <input
                className='pa3 w-50 ba b--light-gray bg-washed-green'
                type='text'
                placeholder='search images'
                onChange={handleSearchInputChanges}
            />
            <br />
            <br />
            <button onClick={onSearchChange} type="submit" value="SEARCH">Search</button>
            </div>
            {images.length > 0 ? (
                <ImageList images={images} />
            ) : null }
            
        </>
    );
}
