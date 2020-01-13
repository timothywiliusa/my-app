import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


const Row = props => (
    <tr>
        <td>{props.plan.purpose}</td>
        <td>{props.plan.title}</td>
        <td>{props.plan.description}</td>
        <td>{props.plan.prepdays}</td>
        <td>{props.plan.date.substring(0,10)}</td>
        <td>
            <Link to={"/edit/"+props.plan._id}>edit</Link> | <a href="#" onClick={() => {props.deletePlan(props.plan._id)}}>delete</a>
        </td>
    </tr>

)
export default class PlanList extends Component{
    constructor(props){
        super(props);

        this.deletePlan = this.deletePlan.bind(this);

        this.state= {plans: []};

    }

    componentDidMount(){
        axios.get('http://localhost:5000/plans/')
            .then(res => {
                this.setState({plans: res.data});
            })
            .catch((err) => {
                console.log(err);
            })
    }

    deletePlan(id){
        axios.delete('http://localhost:5000/plans/'+id)
            .then(res => console.log(res.data));

        //useful react method, to remove from page
        this.setState({
            //for every element in the array, return it if el._id does not equal id(that we're deleting)
            plans: this.state.plans.filter(element => element._id !== id)
        })
    }

    buildPlanRows(){
        return this.state.plans.map(cur => {
            return <Row plan={cur} deletePlan = {this.deletePlan} key={cur._id}/>;
        })
    }

    render(){
        return(
            <div>
            <h3>Plans</h3>
            <table onSubmit={this.onSubmit}>
                <thead className="thead-light">
                    <tr>
                        <th>Purpose</th>
                        <th>Title</th>
                        <th>Prep days</th>
                        <th>Due date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.buildPlanRows()}
                </tbody>
            </table>
    
        </div>
        )
    }
}