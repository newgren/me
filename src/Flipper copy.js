import React, { Component } from 'react';
import './App.css';

class Flipper extends Component {
  constructor(props) {
      super(props);
      this.images = [
          // require('./img/1.JPG'),
        require('./img/7.JPG'),
        require('./img/8.JPG'),
        require('./img/10.png'),
        require('./img/3.jpg'),
      ];
      this.toggleHover = this.toggleHover.bind(this);
      this.state = {
        hover0: false,
        hover1: false,
        hover2: false,
        hover3: false,
      }
    }

  toggleHover(i) {
    console.log(i);
    switch (i) {
      case 0:
        this.setState({hover0: !this.state.hover0})
        break;
      case 1:
        this.setState({hover1: !this.state.hover1})
        break;
      case 2:
        this.setState({hover2: !this.state.hover2})
        break;
      case 3:
        this.setState({hover3: !this.state.hover3})
        break;
      default:

    }
  }


  render() {
    let book =
    this.state.hover0 && !this.state.hover1 && !this.state.hover2 && !this.state.hover3?
    (i) =>  {
      return {
        clip: 'auto',
        zIndex: i
      };
    } :
    (i) => {
      return {
        clip: `rect(0px, 1536px, 1152px, ${i*1536/(this.images.length*2)}px)`,
        zIndex: i
      };
    };

    return (
      <div className="Flipper">
        {
          this.images.map((name, i) => {
            return <img
              key={name}
              style={book(i)}
              src={name}
              onMouseEnter={() => this.toggleHover(i)}
              onMouseLeave={() => this.toggleHover(i)}></img>
          })
        }
      </div>
    );
  }
}

export default Flipper;
