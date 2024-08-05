import React from "react";
import "../Userstyle/PostDetail.css";

function PostDetail({ posts }) {
  return (
    <>
      <div className="showpostData">
        <label>
          <b>Post Name:</b>
        </label>
        <span>{posts.update_title}</span>
        <br />
        <label>
          <b>Post Description:</b>
        </label><br />
        <textarea rows="4" cols="67" value={posts.update_description} disabled>
        </textarea>
        <br />
        <label>
          <b>Post Create Time:</b>
        </label>
        <span>{posts.create_time}</span>
        <br />
        <label>
          <b>Post Create Date:</b>
        </label>
        <span>{posts.create_date}</span>
        <br />
        <label>
          <b>Attached Link:</b>
        </label>
        <span>{posts.update_link}</span>
        <br />
        <label>
          <b>Attached File:</b>
        </label>
        <span id="file" className="attachment pointer">
          {posts.update_file}
        </span>
      </div>
    </>
  );
}

export default PostDetail;
