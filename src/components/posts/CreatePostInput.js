import React, {useRef,useContext} from "react";
import '../form_shared.css';
import { useHistory } from "react-router-dom";
import {GlobalContext} from "../../GlobalContext";
import Environment from '../../util/relayEnv';
import add_post from "../../mutations/add_post";

export default function CreatePostInput(props){
  const routerHistory = useHistory();
  const postForm = useRef(null);
  const {user,user_id} = useContext(GlobalContext);

  function handleSubmit(e){
    const form=postForm.current;
    const PostInput={
      user: user,
      title: form.querySelector('#input_title').value,
      post_content: form.querySelector('#input_content').value,
      image_url: form.querySelector('#input_image_url').value
    }
    add_post(Environment,PostInput,(data)=>{
      routerHistory.push(`/post/${data.postEdge.cursor}`);
    });
    e.preventDefault();
  }

  return (
    <form id="post_form" className={"form_container"} ref={postForm} onSubmit={handleSubmit}>
      <div className={"input_container"}>
        <div className={"labels"}>
          <label htmlFor="input_user">User</label>
          <label htmlFor="input_title">Title</label>
          <label htmlFor="input_content" className="content">Comment</label>
          <label htmlFor="input_image_url">Image</label>
        </div>
        <div className={"inputs"}>
          <input id="input_user" name="input_user" type="text" value={user_id || ""} disabled={true} />
          <input id="input_title" name="input_title" type="text" placeholder="title" required={true} />
          <textarea id="input_content" name="input_content" defaultValue={"Comment"}></textarea>
          <input id="input_image_url" name="input_image_url" type="url" placeholder="Image Link" />
        </div>
      </div>
      <div className={"submit_container"}>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}