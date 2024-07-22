import React from 'react';
import '../style/ReviewCards.css';
import AssignedUsers from './AssignedUsers';

function ReviewCards({val, tasks}) {
  return (
    <>
        <div className="ReviewTask cards pointer">
            <h4>{val.title}</h4>
                <AssignedUsers users={val.assignedusers} />
        </div>  
    </>
  )
}

export default ReviewCards;