import {Link} from "react-router-dom";

export const TaskCart = ({_id,title,description})=>{

    return(
        <div key={_id} className="cart">
          <h3>{title}</h3>
            <p>{description}</p>
            <Link className="move-btn" to={`/task/${_id}`}> 📤 </Link>
        </div> 
    )
}