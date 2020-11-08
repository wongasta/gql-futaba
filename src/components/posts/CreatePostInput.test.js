import React from 'react';
import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import CreatePostInput from './CreatePostInput';
import {GlobalContext} from "../../GlobalContext";
const add_post = require('../../mutations/add_post');
jest.mock('../../mutations/add_post', ()=>jest.fn());

describe("CreatePostInput", ()=>{

  afterAll(()=>{
    jest.clearAllMocks();
    add_post.mockRestore()
  })

  test("Construction Snapshot", ()=>{
    const Component = mount(<GlobalContext.Provider value={{user: "abc", user_id: "abc"}}><CreatePostInput /></GlobalContext.Provider>);
    expect(toJson(Component)).toMatchSnapshot();
  });

  test("Submission", ()=>{
    const Component = mount(<GlobalContext.Provider value={{user: "abc", user_id: "abc"}}><CreatePostInput /></GlobalContext.Provider>);
    Component.find("#input_title").instance().value="mock title";
    Component.find("#input_content").instance().value="mock content"
    Component.update();
    Component.find("#post_form").simulate('submit');
    expect(add_post).toHaveBeenCalledTimes(1);
    expect(add_post.mock.calls[0][1].user).toBe('abc');
    expect(add_post.mock.calls[0][1].title).toBe('mock title');
    expect(add_post.mock.calls[0][1].post_content).toBe('mock content');
  });
})