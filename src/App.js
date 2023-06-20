import './App.css';
import React, { PureComponent } from 'react'
import Navbar from './Component/Navbar';
import News from './Component/News';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


export default class App extends PureComponent {
  state = {
    progress:0
  }
  setProgress = (Progress) => {
    this.setState({progress:Progress});
  }
  render() {
    return (
      <div>       
      <BrowserRouter>
      <Navbar/>
      <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
      />
      <Routes>
      <Route exact path='/' element={<News setProgress={this.setProgress} key="home" country="in" category='general' heading="" />}/>
      <Route exact path='/business' element={<News setProgress={this.setProgress} key="business" country="in" category='business' heading="(Business)"/>}/>
      <Route exact path='/entertainment' element={<News setProgress={this.setProgress} key="entertainment" country="in" category='entertainment' heading="(Entertainmanet)"/>}/>
      <Route exact path='/general' element={<News setProgress={this.setProgress} key="general" country="in" category='general' heading="(General)"/>}/>
      <Route exact path='/health' element={<News setProgress={this.setProgress} key="health" country="in" category='health' heading="(Health)"/>}/>
      <Route exact path='/science' element={<News setProgress={this.setProgress} key="science" country="in" category='science' heading="(Science)"/>}/>
      <Route exact path='/sports' element={<News setProgress={this.setProgress} key="sports" country="in" category='sports' heading="(Sports)"/>}/>
      <Route exact path='/technology' element={<News setProgress={this.setProgress} key="technology" country="in" category='technology' heading="(Technology)"/>}/>
      </Routes>
      </BrowserRouter>

      </div>
    )
  }
}

