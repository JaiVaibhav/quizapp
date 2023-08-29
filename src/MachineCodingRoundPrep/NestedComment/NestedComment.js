import React, { useState } from "react";
import style from "./NestedComment.module.css";
import { generateSentence, generateName } from "./utils";

function NestedComment() {
  const [comments, setComments] = useState([]);

  function addComment() {
    comments.push({
      id: new Date().getTime(),
      user: generateName(),
      text: generateSentence(),
      replies: [],
    });
    setComments([...comments]);
  }

  function handleAddReply(addReply, id) {
    let found = false;
    function dfs(commentArray, addReply, id) {
      if (found === true) {
        return commentArray;
      }
      for (let ele of commentArray) {
        if (ele.id === id) {
          found = true;
          ele.replies.unshift(addReply);
          return commentArray;
        }
        ele.replies = dfs(ele.replies, addReply, id);
      }
      return [...commentArray];
    }
    const arr = dfs(comments, addReply, id);
    setComments([...arr]);
  }
  return (
    <div className={style.container}>
      <div>Nested Comments</div>
      <div className={style.commentContainer}>
        <button className={style.addComment} onClick={() => addComment()}>
          Add Comment
        </button>
        {comments.map((ele, i) => {
          return (
            <SingleComment
              key={ele.id}
              comment={ele}
              addReplyHandler={handleAddReply}
            />
          );
        })}
      </div>
    </div>
  );
}

export function SingleComment({ comment, addReplyHandler }) {
  function generateReplies() {
    return {
      id: new Date().getTime(),
      user: generateName(),
      text: generateSentence(),
      replies: [],
    };
  }

  return (
    <div className={style.comment}>
      <div>Name : {comment.user}</div>
      <span>Comment : </span>
      <span>{comment.text}</span>
      <button onClick={() => addReplyHandler(generateReplies(), comment?.id)}>
        Generate Replies
      </button>
      {comment?.replies?.length > 0 && (
        <div style={{ paddingLeft: "20px" }}>
          <label>Replies : </label>
          {comment?.replies?.map((ele) => {
            return (
              <SingleComment
                key={ele.id}
                comment={ele}
                addReplyHandler={addReplyHandler}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
export default NestedComment;
