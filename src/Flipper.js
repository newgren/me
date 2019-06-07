import React, { Component } from 'react';
import './App.css';

class Flipper extends Component {
  constructor(props) {
      super(props);

      this.myInput = React.createRef();
      this.state = {
        readyForHeight: false,
        height: 200,
        width: 200,
        images: [
            // require('./img/1.JPG'),
          require('./img/7.JPG'),
          require('./img/1f.JPG'),
          // require('./img/8.JPG'),
          require('./img/2.jpg'),
          require('./img/10.png'),
          require('./img/3.jpg'),
        ]
      }
    }

  updateWidth() {
    this.setState({
      width: this.myInput.current.offsetWidth,
      readyForHeight: true
    });
  }

  componentDidMount() {
    this.updateWidth();
    window.addEventListener('resize', this.updateWidth.bind(this));
  }

  shuffle() {
    var j, x, i;
    let a = this.state.images;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    this.setState({images: a});
  }

  componentDidUpdate(oldProps, oldState) {
    if(this.state.readyForHeight) {
      this.setState({height: this.myInput.current.offsetHeight,
                    readyForHeight: false});
    }
  }

  render() {
    let book =
    (i) => {
      return {
        clip: `rect(0px, ${this.state.width}px, ${this.state.height}px, ${i*this.state.width/this.state.images.length}px)`,
        // left: i*1536/8 + 'px',
        zIndex: i
      };
    };
    return (
      <div className="Flipper"
            onClick={this.shuffle.bind(this)}
            style={{height: this.state.width*(3024/4032)}}
            ref={this.myInput}>
        {
          this.state.images.map((name, i) => {
            return <img
              key={name}
              style={book(i)}
              src={name}></img>
          })
        }
      </div>
    );
  }
}

export default Flipper;
