import React, { useState, useEffect } from 'react';
import ListOfGifs from './components/ListOfGifs';
import './styles/App.css';
import { Route } from "wouter";
import GiftDetails from './pages/GiftDetails';
import Home from './pages/Home';
import Search from './pages/Search';

function App() {

  return (
    <div className="App">
      <section className='App-Content'>
      <Route path="/" component={Home} />
        <Route path="/search/:keyword" component={Search} />
        <Route path="/gift/:id" component={GiftDetails} />
      </section>

    </div>
  );
}

export default App;
