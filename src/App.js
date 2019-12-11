import React , {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Switch,BrowserRouter,Route} from 'react-router-dom';
import Register from './component/Register';
import Home from './component/home';


class App extends Component {
  constructor(props){
    super(props);
    this.state={

    }
  }
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={props=> (<Home {...props}/>)} />
          <Route path='/register' render={props=> (<Register {...props}/>)} />
        </Switch>
      </BrowserRouter>
    )
  }
}


export default App;
