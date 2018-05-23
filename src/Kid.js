import React from 'react';
import Header from '/Users/andypuertas/Desktop/webdev/devmountain/wpr37/nahdb-project/src/components/Header.js';
import Sidenav from '/Users/andypuertas/Desktop/webdev/devmountain/wpr37/nahdb-project/src/components/Sidenav.js';

class Kid extends Component {
    constructor(props){
        super(props);
    }


    render(){
        return(
        <div>
            <Header title='Video Generator' />       
            <Sidenav />
              
        </div>
        )
    }
}

export default App;




