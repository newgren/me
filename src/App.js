import React, { Component } from 'react';
import './App.css';
import Flipper from './Flipper.js';
import FullText from './FullText.js';
import Cloth from './Cloth.js';

class App extends Component {
  render() {
    //return <FullText/>;
    return <Cloth/>;
    return (
      <div className="App">
        <ul>
        {
          [
            [ 'name',
            'travis'],
            [ 'crossword',
              <a target='_none' href='https://www.nytimes.com/crosswords'>nytimes/crossword</a>],
            [ 'img',
              <a target='_none' href='https://instagram.com/mise_en_send'>gram</a>],
            [ 'good company',
              <a target='_none' href='https://welcomepress.xyz?jarv'>WELCOME PRESS</a>],
            [ 'mail',
              <a href='mailto:travisnewgren@gmail.com'>to:travis</a>],
          ].map((a) => {
            return (
              <li>
                <div className='topLevel'>
                  <div className='item'>
                    {
                      a[0].split('').map((c, i) =>
                          <span className='main'>{c}</span>

                      )
                    }</div>
                  <div className='more'>{a[1]}</div>
                </div>
              </li>
            )
          })
        }
        </ul>
        <div className='flipperContainer'>
          <Flipper/>
        </div>
      </div>
    );
  }
}

export default App;
