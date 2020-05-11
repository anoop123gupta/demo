import React from 'react';


export default class About extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return(
            <div className="container">
                <h1>About page </h1>
                <div>
                    <p>
                        In this course, we will be adding routing capabilities to a CMS that allows you to create, update, and delete users. There will be a login form to access it. Therefore, we will need to not only be able to route between each screen but also protect certain routes from unauthenticated users.
                    </p>
                </div>
            </div>
        )
    }
}