import React, { Component } from 'react';
import './App.css';

class FullText extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    let colors = ['orange','yellow', 'green', 'cyan'];
    let getColor = (i, idx) => colors[(i+idx) % colors.length];
    return (
      <div className="FullText">
        <div className='black'></div>
        <div className='black'></div>
        {
          Array.apply(null, {length: 99}).map((a, idx) =>
            <div>
              {
              'TRAVIS NEWGREN'.split('').map((c, i) =>
                <span style={{color: getColor(i, idx)}}>
                  {c}
                </span>)
              }
              <br/>
            </div>

          )
        }
      </div>
    );
  }
}

export default FullText;
