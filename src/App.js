import React, {Component} from 'react';
import _ from 'lodash'
import './styles/App.css';
import TableComponent from './components/TableComponent';

class App extends Component {

    constructor(props){
        super(props);
    }

    


    render(){
        return(
        <TableComponent />
        );
    }
}

export default App;