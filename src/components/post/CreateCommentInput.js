//@flow
import * as React from "react";
import {useRef,useContext} from "react";
import '../form_shared.css';
import {GlobalContext} from "../../GlobalContext";
import add_comment from "../../mutations/add_comment";
import type {Environment as EnvironmentType} from 'relay-runtime';
import type {UserObjType} from '../../App';
import type {PostInputType} from '../../mutations/add_comment';

type Props={
  postId: string,
  environment: EnvironmentType
}

export default function CreateCommentInput({postId,environment}:Props): React.Node{
  const commentForm = useRef(null);
  const {user,user_id}:UserObjType = useContext(GlobalContext);

  function handleSubmit(e){
    const form=commentForm.current;
    const CommentContentElement = ((form && form.querySelector('#input_content'): any): null|HTMLInputElement);
    const ImageUrlElement = ((form && form.querySelector('#input_image_url'): any): null|HTMLInputElement);
    if(!CommentContentElement || !ImageUrlElement) return;
    const PostInput:PostInputType={
      user: user,
      post: postId,
      comment_content: CommentContentElement?.value,
      image_url: ImageUrlElement?.value
    } 
    add_comment(environment,PostInput,(data)=>{
      CommentContentElement.value="";
      ImageUrlElement.value="";
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