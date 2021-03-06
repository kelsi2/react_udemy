class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);

    this.state = {
      count: 0
    };
  }

  componentDidMount() {
      const stringCount = localStorage.getItem('count');
      const count = parseInt(stringCount, 10);
  
      if (!isNaN(count)) {
        this.setState(() => ({ count }))
      }
  }
  
  componentDidUpdate(prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem('count', this.state.count);
    }
  }

  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    });
  }

  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    })
  }

  handleReset() {
    this.setState(() => {
      return {
        count: 0
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    )
  }
}

ReactDOM.render(<Counter count={83} />, document.getElementById('app'))

// let count = 0;
// const addOne = () => {
//   count++;
//   renderCounterApp();
// }
// const minusOne = () => {
//   count--;
//   renderCounterApp();
// }
// const reset = () => {
//   count = 0;
//   renderCounterApp();
// }

// // const user = {
// //   name: 'Kelsi Proulx',
// //   age: 31,
// //   location: 'Vancouver'
// // };

// // // var userName = "Kelsi Proulx";
// // // var userAge = 31;
// // // var userLocation = 'Vancouver';

// // // If this returns undefined it just doesn't render, checking the elements tag reveals no element at all if location doesn't exist
// // function getLocation(location) {
// //   if (location) {
// //     return <p>Location: {location}</p>;
// //   }
// // }

// // // Challenge: build template alone and render
// // const templateTwo = (
// //   <div>
// //     <h1>{user.name ? user.name : 'Anonymous'}</h1>
// //     {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
// //     {getLocation(user.location)}
// //   </div>
// // );

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//     <h1>Count: {count}</h1>
//     <button onClick={addOne}>+1</button>
//     <button onClick={minusOne}>-1</button>
//     <button onClick={reset}>reset</button>
//     </div>
//     );
//     // First variable is the JSX to render, second is where we want to render it (index.html, we are retrieving this with the id)
//     ReactDOM.render(templateTwo, appRoot);
// }

// renderCounterApp();