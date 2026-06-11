import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import ConditionalSection from './sections/conditional';
import MiniaturesItem from './sections/miniaturesItem';
import cars from './data/miniatures.json';
import Forms from './sections/forms'

// function Hello(props){
//   return <h2> {props.title} </h2>
// }

// const Hello = (props) => <h2> {props.title} </h2>

class Hello extends Component {
  render(){
    return <div>
      <p> Componente Hello </p>
      <h2> {this.props.title} </h2>

    </div>
  }
}

Hello.defaultProps = {
  title: 'que se yo',
}

class Text extends Component {
  render(){

    const {title, arrayOfNumbers, boolean, text, objetoPrueba, number, multiply} = this.props

    const mappedNumbers= arrayOfNumbers.map(multiply)

    return <div>
      <p> Componente Text </p>
      <p>{text}</p>
      <p>{boolean ? number : mappedNumbers.join(', ')}</p>
      <p> soy una barra separadora </p>
      <p>{objetoPrueba.key}</p>
      {title}
    </div>
  }
}

class ContadorNumber extends Component{
  render(){
    return <div>
      <p> Componente Contador : <span> {this.props.contador} </span> </p>
    </div>
  }
}

class Contador extends Component{
  state = {
    contador: 0,
    nombre: "Juan"
  };

  constructor(props){
    super(props);
    setInterval(() => {
      this.setState({contador: this.state.contador +1 })
    }, 1000)
  }
  
  render(){
    return <ContadorNumber contador={this.state.contador}/>
  }
}




class App extends Component {
  constructor(){
    super();
    
    this.state = { mouseX: 0, mouseY:0}
    // this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  handleMouseMove = (e) => {
    const {clientX, clientY} = e;
    this.setState({mouseX:clientX, mouseY:clientY})
  }

  handleClick(e){
    console.log('evento', e);
    console.log('enative', e.nativeEvent)
    alert('alerta')
  }

  
  // return ( cars.map(car => {
  //     return <MiniaturesItem key={car.id} car={car}/>
  //   })
  // );
  render(){
    const numbers = [1,1,2,3,3,4,5];
    return <div onMouseMove={this.handleMouseMove}>
    <h4> Eventos </h4>
    <button onClick={this.handleClick}>
      a ve!
    </button>
    {/* <p>{this.state.mouseX}, {this.state.mouseY}</p> */}
    <Forms/>
  </div>
  }
}

export default App;
