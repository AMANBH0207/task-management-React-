import React from 'react';
import '../style/ReviewCards.css';
import AssignedUsers from './AssignedUsers';

function ReviewCards(val) {
  return (
    <>
        <div className="ReviewTask cards pointer">
            <h4>{val.val.TaskName}</h4>
                <AssignedUsers users={val.val.assignedusers} />
        </div>  
    </>
  )
}

export default ReviewCards;