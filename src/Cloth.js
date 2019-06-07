import React, { Component } from 'react';
import Draggable from 'react-draggable'; // The default

import './App.css';

class Cloth extends Component {
  constructor(props) {
      super(props);

      this.pics = this.shuffle([
          {name: 'purple', dx: -6, dy: 31},
          {name: 'green', dx: -2, dy: 20},
          {name: 'zerotolerance', dx: -2, dy: 1},
          {name: 'olivestripe', dx: -40, dy: 19},
          {name:'fleece', dx: -6, dy: 34},
          {name:'check', dx: -8, dy: 6},
          {name:'orange', dx: -26, dy: 0},
          {name: 'grey', dx: 10, dy: 32},
      ]);
      this.mats = this.pics.map((pic) => require('./cloth/'+pic.name+'_lite.png'));
      this.mes = this.pics.map((pic) => require('./cloth/'+pic.name+'_me_lite.png'));
      this.onStart = this.onStart.bind(this);
      this.onStop = this.onStop.bind(this);
      this.images = this.mes.map((me, i) =>
        <img  id={'me'+i}
              src={me}
              draggable="false">
        </img>);
      this.state = {
        // mats: [
        //   require('./cloth/purple.png'),
        //   require('./cloth/green.png'),
        //   require('./cloth/zerotolerance.png'),
        //   require('./cloth/zerotolerance.png'),
        //   require('./cloth/purple.png'),
        //   require('./cloth/green.png'),
        // ],
        selected: 7,
        activeDrag: false
      }
    }

  shuffle(arr) {
    var j, x, i;
    let a = arr;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
  }

  onStart() {
    this.setState({activeDrag: true});
  }

  onStop(e) {
    // console.log(e.target);
    // e.target.style.transform = 'translate(0px, 0px)';
    this.setState({activeDrag: false});
    this.setState(this.state);
  }

  handleDrag(imageIndex, e, ui) {
    let mat = e.target.getBoundingClientRect();
    let me = document.getElementById('me'+this.state.selected).getBoundingClientRect();
    if(this.isOverlapping(mat, me)) {
      console.log('lap!');
      this.setState({selected: imageIndex});
      // return false; use to cancel drag
    }
  }


  isOverlapping(one, two) {
    return !(one.right < two.left ||
                one.left > two.right ||
                one.bottom < two.top ||
                one.top > two.bottom);
  }

  render() {
    const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
    return (
      <div className="Cloth">
        <div className='menu'>
          {'drag and drop cloths'}
        </div>
        <div className='fun'>
          <div className='main'>
            {
              this.images.map((image, i) => {
                let visibility = i == this.state.selected ? 'inherit' : 'none';
                let copy = React.cloneElement(image, {style: {display: visibility, transform: `translate(
                              ${this.pics[i].dx}px,
                              ${this.pics[i].dy}px
                            )`}});
                return copy;
              })
            }
            <div className='eye left'></div>
            <div className='eye right'></div>
          </div>
          <div className='chooser'>
            {
              this.mats.map((name, i) => {
                return <Draggable {...dragHandlers}
                                    onDrag={this.handleDrag.bind(this,i)}
                                    position={{x: 0, y: 0}}
                                    key={name}><img
                    src={name}
                    draggable="false"></img></Draggable>
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Cloth;
