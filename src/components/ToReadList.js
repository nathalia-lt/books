import React, { useState, useEffect } from "react";
import axios from "axios";
import BookCard from "./BookCard";

function ToReadList({books,onReadClick,onFavoriteClick}){
    let readUrl= 'http://localhost:4000/to-read'

    function displayBooks(bookList){
        let newBookList = bookList.filter((book)=>book.volumeInfo.imageLinks !== undefined)
        return newBookList.map((book,i)=>{
            return (
                <BookCard book={book} key={i} onFavoriteClick={onFavoriteClick} onReadClick={onReadClick}/>
                )
            })
    }
  
    let booksToDisplay = displayBooks(books);



    return (
        <React.Fragment>
            <div className="spacer"></div>
            <h1 className="heading">Reading List</h1>
            <div className="backdrop">
                <div className='book-carousel'> 
                        {booksToDisplay}
                </div> 
            </div>
            <div className="bot-spacer"></div>
        </React.Fragment>
)
}

export default ToReadList;