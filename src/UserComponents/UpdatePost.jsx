import React from 'react';
import "../Userstyle/UpdatePost.css"
import ButtonComp from '../components/ButtonComp';

function UpdatePost() {
  return (
    <>
    <div className='ButtonsDivupdate'>
        <ButtonComp className={'Update pointer'} ButtonName={'Post Update'}/>
        <ButtonComp className={'viewUpdates pointer'} ButtonName={'View Posts'}/>
    </div>
    </>
  )
}

export default UpdatePost