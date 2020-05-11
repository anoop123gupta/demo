import React from 'react';


export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return(
            <div className="container">
                <h1>Home page </h1>
                <div>
                    <p>
                        Once you learn how to use React to create dynamic user interfaces on a single page, you'll start to wonder if you can make an entire site where the front-end is entirely React. You can gain benefits from this since after the initial page load, you will only need to make requests to your server to get data from its API. This sort of application is called a Single Page Application or SPA.
                    </p>
                </div>
            </div>
        )
    }
}
