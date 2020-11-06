import React, {useRef,useContext} from "react";
import '../form_shared.css';
import {GlobalContext} from "../../App";
import Environment from '../../util/relayEnv';
import add_post from "../../mutations/add_post";

export default function CreatePostInput(props){
  const postForm = useRef(null);
  const {user,user_id} = useContext(GlobalContext);

  function handleSubmit(e){
    const form=postForm.current;
    const PostInput={
      user: user,
      title: form.input_title.value,
      post_content: form.input_content.value,
      image_url: form.input_image_url.value
    }
    add_post(Environment,PostInput,(data)=>{
      console.log(data);
    });
    e.preventDefault();
  }

  return (
    <form id="post_form" className={"form_container"} ref={postForm} onSubmit={handleSubmit}>
      <div className={"input_container"}>
        <div className={"labels"}>
          <label htmlFor="input_user">User</label>
          <label htmlFor="input_title">Title</label>
          <label htmlFor="input_content">Comment</label>
          <label htmlFor="input_image_url">Image</label>
        </div>
        <div className={"inputs"}>
          <input id="input_user" type="text" value={user_id} disabled={true} />
          <input id="input_title" type="text" placeholder="title" required={true} />
          <textarea id="input_content" defaultValue={"Comment"}></textarea>
          <input id="input_image_url" type="url" placeholder="Image Link" />
        </div>
      </div>
      <div className={"submit_container"}>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}