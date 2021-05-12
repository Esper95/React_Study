import React, {Component, Fragment} from "react";
import MyName from "./MyName";
import Counter from "./Counter";


class App extends Component {
    render() {
        const style = {
            backgroundColor: 'black',
            padding: '16px',
            color: 'white',
            fontSize: '12px'
        };
        return(
            <fragment>
                <MyName name ="최정상"/>
                <Counter/>
            </fragment>
        );
    }

}

export default App;
