import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './Shop.css';
const Shop = () => {
  const [listOfBooks, setListOfBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/book").then((resp) => {
      setListOfBooks(resp.data);
    });
  }, []);
  return (
    <div className="book_grid">
      {listOfBooks.map((value, key) => {
       return <div className="book">
          <div>
            <div className = "image"><img src={value.coverImage} alt="" /></div>
            <div className = "title">{value.title}</div>
          </div>
        </div>;
      })}
    </div>
  )
}

export default Shop