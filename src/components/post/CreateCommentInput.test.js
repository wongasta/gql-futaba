import React from 'react';
import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import CreateCommentInput from './CreateCommentInput';
import {GlobalContext} from "../../GlobalContext";
import add_comment from "../../mutations/add_comment";
jest.mock('../../mutations/add_comment', ()=>({
  __esModule: true,
  default: jest.fn()
}));

describe("CreateCommentInput", ()=>{

  afterAll(()=>{
    jest.clearAllMocks();
  })

  test("Construction Snapshot", ()=>{
    const Component = mount(<GlobalContext.Provider value={{user: "abc", user_id: "abc"}}><CreateCommentInput postId={"abc"} /></GlobalContext.Provider>);
    expect(toJson(Component)).toMatchSnapshot();
  });

  test("Submission", ()=>{
    add_comment.mockImplementation((_,__,cb)=>cb());
    const Component = mount(<GlobalContext.Provider value={{user: "abc", user_id: "abc"}}><CreateCommentInput postId={"abc"} /></GlobalContext.Provider>);
    Component.find("#input_content").instance().value="mock content";
    Component.find("#input_image_url").instance().value="mock image url";
    Component.update();
    Component.find("#comment_form").simulate('submit');
    expect(add_comment).toHaveBeenCalledTimes(1);
    expect(add_comment.mock.calls[0][1].user).toBe('abc');
    expect(add_comment.mock.calls[0][1].post).toBe('abc');
    expect(add_comment.mock.calls[0][1].comment_content).toBe('mock content');
    expect(add_comment.mock.calls[0][1].image_url).toBe('mock image url');
    expect(Component.find("#input_content").instance().value).toBe("");
    expect(Component.find("#input_image_url").instance().value).toBe("");
  });
})