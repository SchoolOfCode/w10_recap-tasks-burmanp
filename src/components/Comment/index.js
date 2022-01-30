import React, { useState } from "react";
import css from "./comment.module.css";
// import { Drawer, Button } from "antd";

function CommentSection({ comments }) {
  return (
    <section className={css.commentSection}>
      {comments.map((comment) => (
        <div key={comment.id} className={css.commentDiv}>
          <h3>{comment.name}</h3>
          <p>{comment.text}</p>
        </div>
      ))}
    </section>
  );
}

export default CommentSection;
