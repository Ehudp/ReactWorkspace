import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

// const App = () => {
//   let index = 0;
//   setInterval(() => {
//     ++index;
//     console.log(index);
//   }, 1000);
//   return <SeasonDisplay index={index} />;
// };

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       index: 0
//     };
//     setInterval(() => {
//       let { index } = this.state;
//       console.log(index);
//       this.setState({ index: ++index });
//     }, 1000);
//   }

//   render() {
//     return <SeasonDisplay index={this.state.index} />;
//   }
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null
    };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
        const lat = position.coords.latitude;
        this.setState({ lat: lat });
      },
      err => console.log(err)
    );
  }

  render() {
    return <div>Latitude : {this.state.lat}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
