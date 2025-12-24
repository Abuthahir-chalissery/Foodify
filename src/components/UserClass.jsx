import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            count : 0,
            count2: 2
        }
    console.log("Called constructor");
    }


    componentDidMount(){
        console.log('Called didMount');
        
    }


    render(){
        console.log('Called Render');
        
        const {name} = this.props
        const {count} = this.state

        return(
            <div className="text-green-400">
                <h1>Name: {name}</h1>
                <h1>Count: {count}</h1>
                <button  onClick={()=>{
                    this.setState({count: this.state.count +1})
                }} className="border p-2 rounded-2xl bg-black text-white cursor-pointer">click me for change</button>
            </div>
        )
    }
}

export default UserClass