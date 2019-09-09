import './less/input-moment.less';
import './App.less';
import moment from 'moment';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import InputMoment from './input-moment';
import packageJson from '../package.json';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import './input-moment.css';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      m: moment(),
      name: '',
      number:''

    }
    this.handleChangename = this.handleChangename.bind(this);
    this.handleChangenumber = this.handleChangenumber.bind(this);
  }
 /* state = {
    m: moment(),
    name:'',
    number:'',

  };*/

  handleChange = m => {
    this.setState({ m });
  };
  handleChangename = (event) => {
    this.setState({name: event.target.value});
    
  };
  handleChangenumber = (event) => {
    this.setState({number: event.target.value});
  };

  handleSave = () => {

    
    //const {number} = this.state;
  
    const name=this.state.name;
    const number=this.state.number;
  var yo= this.state.m.format('llll');
    var passwordd= 'kdmmfom';
    var UserEmail='mmdowmo@ododsmd.com'
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://www.magictouchinterior.com/nfkxknvkdnfdf/add_date.php'
    fetch(proxyUrl + targetUrl, {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: name,
    number: number,
    thedate: yo
  })
 
}).then((response) => response.json())
      .then((responseJson) => {
 
        // If server response message same as Data Matched
       if(responseJson === 'Thank you!')
        {
 
          console.log('saved in this bitch',yo );
          window.location.href = 'https://magictouchinterior.com/thanks'; 
          return null;
 
        }
        else{
 
          console.log(responseJson);
        }
 
      }).catch((error) => {
        console.error(error);
      });
    
  };

  render() {
    return (
      <div className="app">
        
        <div className="log-form">

  <form>
  <h1 className="hdr">
          Magic Touch Interior
        </h1>
       
    <input 
    type="text" 
    name="name"
    value={this.state.name}
    title="username" 
    placeholder="Full Name" 
    onChange={this.handleChangename}/>
    <input type="number"
    name="number"
    value={this.state.number}
     title="username"
      placeholder="Phone Number" 
      onChange={this.handleChangenumber}/>
          <div className="input">
            <input type="text" value={this.state.m.format('llll')} readOnly />
          </div>
          <InputMoment
            moment={this.state.m}
            onChange={this.handleChange}
            minStep={5}
            onSave={this.handleSave}
          />
        </form>
      </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));