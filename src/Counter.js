import React, {Component} from "react";

/*const Problematic = () => {
    throw (new Error('버그가 나타났다!'));
    return (
        <div>

        </div>
    );
};*/
class Counter extends Component{
    state  = {
        number : 0,
        error : false
    }

    constructor(props) {
        super(props);
        console.log('constructor');
    }
    componentDidCatch(error, errorInfo) {
        this.setState({
            error: true
        });
    }
    componentWillMount() {
        console.log('componentWillMount (deprecated)');
    }
    componentDidMount() {
        console.log(('componentDidMount'));
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        if(nextState.number % 5 === 0) return false;
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate');
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
    }


    handleIncrease =() => {
        const {number} = this.state;
        this.setState({
           number : number +1
        });
    }

    handleDecrease = () => {
        const {number} = this.state;
        this.setState({
           number : number -1
        });
    }

    render() {
        if (this.state.error) return  (<h1>에러발생!</h1>);
        return(
            <div>
                <h1>카운터</h1>
                <div>값 : {this.state.number}</div>
                {/*{this.state.number ===4 && <Problematic/>}*/}
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        );




    }
}

export default Counter;