import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { books } from "./data";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }]);
  }

  function changeQuantity(book, quantity) {
    setCart(
      cart.map((item) => item.id === book.id
          ? {
              ...item,
              quantity: +quantity,
            }
          : item
      )
    );
  }

  function removeItem(book) {
    setCart(cart.filter(item => item.id !== book.id))
  }

  function numberOfItems() {
    let counter = 0;
    cart.forEach(item => {
      counter += item.quantity
    })
    return counter;
  }

  // useEffect(() => {
  //   console.log(cart);
  // }, [cart]);

  return (
    <>
      <Router>
        <div className="App">
          <Nav numberOfItems={numberOfItems()} />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/books" element={<Books books={books} />} />
            <Route
              path="/books/:id"
              element={
                <BookInfo books={books} addToCart={addToCart} cart={cart} />
              }
            />
            <Route
              path="/Cart"
              element={
                <Cart
                  books={books}
                  cart={cart}
                  changeQuantity={changeQuantity}
                  removeItem={removeItem}
                />
              }
            />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;

// function addToCart(book) {
//   const dupeItem = cart.find(item => +item.id === +book.id);
//   if (dupeItem) {
//     setCart(
//       cart.map((item) => {
//         if (item.id === dupeItem.id) {
//           return {
//             ...item, quantity: item.quantity + 1,
//           };
//         } else {
//           return item;
//         }
//       })
//     );
//   }
//   else {
//   setCart([...cart, { ...book, quantity: 1 }]);
//   }
// }

// useEffect(() => {
//   console.log(cart);
// }, [cart]);
