import React from 'react';
function Question(props){

    console.log("in question props-- ",props);
    return(
        <div>
            {props.data.data}
        </div>
    )
}

export default Question;