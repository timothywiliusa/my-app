import React, { Component } from 'react';

export default class CreatePurpose extends Component{

    goToNewPlan = () => {
        this.props.history.push('/newplan');
    }

    goToPlanList= () => {
        this.props.history.push('/');
    }

    render(){
        return(
            <div>
                <p>You are on the Find a Purpose Component</p>
                <button
                className="btn btn-primary" 
                onClick={this.goToNewPlan}>Go to new plan
                </button>

                <button 
                className="btn btn-primary" 
                onClick={this.goToPlanList}>Go to plan list
                </button>
            </div>
        )
    }
}