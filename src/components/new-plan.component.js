import React, { Component } from 'react';
import axios from 'axios';


import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreatePlan extends Component{

    constructor(props){
        super(props);

        //not sure what this is for
        this.onChangePurpose = this.onChangePurpose.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangePrepDays = this.onChangePrepDays.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            purpose: '',
            title: '',
            description: '',
            prepdays: 0,
            date: new Date(),
            purposelist:[]
        }
    }

    componentDidMount(){
        //console.log("mounted");

        axios.get('http://localhost:5000/purposes/')
            .then(res => {
                if (res.data.length>0){
                    console.log(res.data)
                    this.setState({
                        purposelist: res.data.map(pur => pur.purpose),
                        purpose: res.data[0].purpose
                    })

                }
                
            });

        console.log(this.props);
     
    }

    onChangePurpose(e){
        this.setState({
            purpose: e.target.value
        });
    }
    onChangeTitle(e){
        this.setState({
            title: e.target.value
        });
    }
    onChangeDescription(e){
        this.setState({
            description: e.target.value
        });
    }
    onChangePrepDays(e){
        this.setState({
            prepdays: e.target.value
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
            title: this.state.title,
            description: this.state.description,
            prepdays: this.state.prepdays,
            date: this.state.date
        }

        //console.log("submitted");
        console.log(plan);

        axios.post('http://localhost:5000/plans/add',plan)
            .then(res => console.log(res.data));

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
                    <label>Title: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.title}
                        onChange={this.onChangeTitle}
                        />
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
                    <label>Prep days: </label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={this.state.prepdays}
                        onChange={this.onChangePrepDays}
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