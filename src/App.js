import React, { useEffect } from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import ReturnOrders from "./ReturnOrders";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import OrdersTabs from "./OrdersTabs";

function App() {
  const [{ user }, dispatch] = useStateValue();

  // useEffect hook <<<< piece of code which runs based on a given condition

  useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the user is logged in...
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        //the user is logged out

        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    });

    return () => {
      //any cleanup operations go here
      unsubscribed();
    }
  }, []);

  console.log(user);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/returns">
            <Header />
            <ReturnOrders />
            <OrdersTabs />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Header />
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
