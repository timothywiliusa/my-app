import React, { Component } from 'react';
import axios from 'axios';

export default class CreatePurpose extends Component{

    constructor(props){
        super(props);

        //not sure what this is for
        this.onChangePurpose = this.onChangePurpose.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            purpose: ''
        }
    }

    componentDidMount(){
        //console.log("mounted");
        console.log(this.props); //to see this object's props
    }

    onChangePurpose(e){
        this.setState({
            purpose: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const purpose = {
            purpose: this.state.purpose
        }

        console.log("submitted");
        console.log(purpose);

        axios.post('http://localhost:5000/purposes/add',purpose)
            .then(res => console.log(res.data));

        this.setState({
            purpose: ''
        })
        //this.props.history.push('/');

    }

    goToNewPlan = () => {
        this.props.history.push('/newplan');
    }

    goToPlanList= () => {
        this.props.history.push('/');
    }

    render(){
        return(
            <div>
                <h3>Create New Plan</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                    <label>Purpose: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.purpose}
                        onChange={this.onChangePurpose}
                        />
                    </div>
                    

                    <div className="form-group">
                    <input type="submit" value="Add purpose" className="btn btn-primary" />
                    </div>
                </form>
            
                <button
                className="btn btn-primary" 
                onClick={this.goToNewPlan}>Go to new plan
                </button>
                <p> </p>
                <button 
                className="btn btn-primary" 
                onClick={this.goToPlanList}>Go to plan list
                </button>
            </div>
        )
    }
}