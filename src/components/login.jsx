import React from 'react';


export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return(
            <div className="container">
                <h1>Login  page </h1>
                <div>
                    <label>Email</label><br />
                    <input type="email" className="form-control col-md-4"  name="name" placeholder="your email" /><br />
                    <label>Password</label><br />
                    <input type="password" className="form-control col-md-4"  name="pass" placeholder="your password " /><br /> <br />
                    <button className="btn btn-success btn-md">submit</button>
                </div>
            </div>
        )
    }
}