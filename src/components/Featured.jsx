import React from "react";
import { books } from "../data";
import Book from "./ui/Book";

const Featured = () => {
  // console.log(books.filter((book) => book.rating === 5).slice(0, 4));

  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Featured <span className="purple">Books</span>
          </h2>
          <div className="books">
            {books
              .filter((book) => book.rating === 5)
              .slice(0, 4)
              .map((book) => (
                <Book book={book} key={book.id} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
