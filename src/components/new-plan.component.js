import React, { Component } from 'react';


import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreatePlan extends Component{

    constructor(props){
        super(props);

        //not sure what this is for
        this.onChangePurpose = this.onChangePurpose.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDueIn = this.onChangeDueIn.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            purpose: '',
            description: '',
            duein: 0,
            date: new Date(),
            purposelist:[]
        }
    }

    componentDidMount(){
        //console.log("mounted");
        console.log(this.props);
        this.setState({
            purposelist: ['test purpose'],
            purpose: 'test purpose'
        })
    }

    onChangePurpose(e){
        this.setState({
            purpose: e.target.value
        });
    }
    onChangeDescription(e){
        this.setState({
            description: e.target.value
        });
    }
    onChangeDueIn(e){
        this.setState({
            duein: e.target.value
        });
    }
    onChangeDate(date){
        this.setState({
            date: date
        });
    }

    onSubmit(e){
        e.preventDefault();

        const plan = {
            purpose: this.state.purpose,
            description: this.state.description,
            duein: this.state.duein,
            date: this.state.date
        }

        console.log("submitted");
        console.log(plan);

        //window.location = '/';
        this.props.history.push('/');

    }

    render(){
        return(
            <div>
                <h3>Create New Plan</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                    <label>Purpose: </label>
                    <select ref="userInput"
                        required
                        className="form-control"
                        value={this.state.purpose}
                        onChange={this.onChangePurpose}>
                        {
                            this.state.purposelist.map(function(purpose) {
                            return <option 
                                key={purpose}
                                value={purpose}>{purpose}
                                </option>;
                            })
                        }
                    </select>
                    </div>
                    <div className="form-group"> 
                    <label>Description: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.description}
                        onChange={this.onChangeDescription}
                        />
                    </div>
                    <div className="form-group">
                    <label>Due in: </label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={this.state.duein}
                        onChange={this.onChangeDueIn}
                        />
                    </div>
                    <div className="form-group">
                    <label>Date: </label>
                    <div>
                        <DatePicker
                        selected={this.state.date}
                        onChange={this.onChangeDate}
                        />
                    </div>
                    </div>

                    <div className="form-group">
                    <input type="submit" value="Upload Plan" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}