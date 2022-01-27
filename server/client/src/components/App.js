import React, { Fragment, Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import { connect} from 'react-redux';
import * as actions from '../actions';

const Dashboard = () => <h2>Dashboard</h2>
const Survey = () => <h2>Survey</h2>

class App extends Component{
    componentDidMount() {
        this.props.fetchUser();
        console.log("hiiiiiiii")
    }
  render () {
    return (
        <div>
            <BrowserRouter>
                <Fragment>
                    <Header/>
                    <Route component={Landing} exact path='/' />
                    <Route component={Dashboard} exact path='/surveys' />
                    <Route component={Survey} path='/surveys/new' />
                   
                </Fragment>
            </BrowserRouter>
        </div>
    )
  }
}
export default connect(null, actions)(App);
