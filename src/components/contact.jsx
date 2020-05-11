import React from 'react';


export default class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return(
            <div className="container">
                <h1>Contact page </h1>
                <div>
                    <p>
                    Computer network is a telecommunication channel using which we can share data with other coomputers or devices, connected to the same network. It is also called Data Network. The best example of computer network is Internet
                    </p>
                </div>
            </div>
        )
    }
}