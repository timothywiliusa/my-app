import React from 'react';

const Todo = ({id,userId,title,completed}) => {

    var mybool = "";

    if(completed == false){
        mybool = "not done";
    }
    else{
        mybool = "done";
    }

    return(
        <div>
            <h1>{userId} - {id}</h1>
            <p>status: {mybool}</p>
            <p>{title}</p>
        </div>
    );
}

export default Todo;