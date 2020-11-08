import React, {useRef,useContext} from "react";
import '../form_shared.css';
import {GlobalContext} from "../../GlobalContext";
import add_comment from "../../mutations/add_comment";

export default function CreateCommentInput({postId,environment}){
  const commentForm = useRef(null);
  const {user,user_id} = useContext(GlobalContext);

  function handleSubmit(e){
    const form=commentForm.current;
    const PostInput={
      user: user,
      post: postId,
      comment_content: form.querySelector('#input_content').value,
      image_url: form.querySelector('#input_image_url').value
    }
    add_comment(environment,PostInput,(data)=>{
      form.querySelector('#input_content').value="";
      form.querySelector('#input_image_url').value="";
    });
    e.preventDefault();
  }

  return (
    <form id="comment_form" className={"form_container"} ref={commentForm} onSubmit={handleSubmit}>
      <div className={"input_container"}>
        <div className={"labels"}>
          <label htmlFor="input_user">User</label>
          <label htmlFor="input_content" className="content">Comment</label>
          <label htmlFor="input_image_url">Image</label>
        </div>
        <div className={"inputs"}>
          <input id="input_user" type="text" value={user_id} disabled={true} />
          <textarea id="input_content" defaultValue={"Reply"}></textarea>
          <input id="input_image_url" type="url" placeholder="Image Link" />
        </div>
      </div>
      <div className={"submit_container"}>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}