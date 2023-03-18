import React from 'react'
import { Avatar } from '@material-ui/core'
import "./Story.css";

function Story({image,profileSRc,title}) {
  return (
    <div style={{backgroundImage:'url(https://www.online-tech-tips.com/wp-content/uploads/2022/06/03-Viewers-1-577x1024.jpg)'}}
    className='Story'>
       <Avatar className="story__avatar"src={profileSRc} />
       <h4>{title}</h4>


    </div>
  )
}

export default Story