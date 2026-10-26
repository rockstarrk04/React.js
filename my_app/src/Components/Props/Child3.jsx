import React from "react";

const Child3 = (props) => {
    let {name, arr} = props
    return(
        <div className="child3">
            <h2>I am in child-3 Component</h2>
            <h3>
                {name} is known skills like {arr.map(ele =>ele+",")}
            </h3>
        </div>
    )
}
export default Child3