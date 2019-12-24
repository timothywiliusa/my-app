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
            <h1>{id}</h1>
            <p>{userId}</p>
            <p>{title}</p>
            <p>status: {mybool}</p>
        </div>
    );
}

export default Todo;