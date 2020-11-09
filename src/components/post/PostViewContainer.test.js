import React from 'react';
import { mount } from "enzyme";
import { MemoryRouter } from 'react-router'
import {GlobalContext} from "../../GlobalContext";
import {
  createMockEnvironment,
  MockPayloadGenerator,
} from 'relay-test-utils';
import PostViewContainer from "./PostViewContainer";
import {useParams} from "react-router-dom";
jest.mock('react-router-dom', ()=>({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    post_id: "123"
  }),
}));

describe("PostViewContainer", ()=>{
  it("post::add_comment", ()=>{
    const MockEnvironment = createMockEnvironment();
    const PostViewContainerWrapper = mount(<MemoryRouter>
      <GlobalContext.Provider value={{user: "abc", user_id: "abc"}}>
        <PostViewContainer environment={MockEnvironment} />
      </GlobalContext.Provider>
    </MemoryRouter>);
    MockEnvironment.mock.resolveMostRecentOperation(operation=>
      MockPayloadGenerator.generate(operation, {
        Post(context,generateId){
          return {
            "id": "123",
            "user_id": generateId().toString(),
            "title": "Test Title",
            "post_content": "Test Content",
            "image_url": "",
            "created_ts": 1604807877,
            "comments": {
              "edges": [
                {
                  "cursor": generateId().toString(),
                  "node": {
                    "id": generateId().toString(),
                    "user_id": generateId().toString(),
                    "comment_content": "Comment 1",
                    "image_url": "",
                    "created_ts": 1604807884
                  }
                },{
                  "cursor": generateId().toString(),
                  "node": {
                    "id": generateId().toString(),
                    "user_id": generateId().toString(),
                    "comment_content": "Comment 2",
                    "image_url": "",
                    "created_ts": 1604807885
                  }
                }
              ]
            }
          }
        }
      })
    );
    PostViewContainerWrapper.update();
    expect(PostViewContainerWrapper.find(PostViewContainer).find('.post_container section').children().length).toBe(4);
    PostViewContainerWrapper.find('.new_thread_text a').simulate('click');
    PostViewContainerWrapper.update();
    expect(PostViewContainerWrapper.find('#comment_form')).toBeDefined();
    expect(PostViewContainerWrapper.find('#input_user').props().value).toBe("abc");
    PostViewContainerWrapper.find('#input_content').instance().value="Mock Content";
    PostViewContainerWrapper.update();
    PostViewContainerWrapper.find("#comment_form").simulate('submit');
    const operation = MockEnvironment.mock.getMostRecentOperation();
    MockEnvironment.mock.resolve(operation, MockPayloadGenerator.generate(operation,{
      CommentEdge(context, generateId) {
        return {
          "cursor": generateId().toString(),
          "node": {
            "id": generateId().toString(),
            "user": "abc",
            "user_id": "abc",
            "post": "ryHWakIFP",
            "comment_content": "new_comment_reply",
            "image_url": "",
            "created_ts": 1604874489
          }
        }
      }
    }));
    PostViewContainerWrapper.update();
    expect(PostViewContainerWrapper.find('.comment_container').length).toBe(3);
    expect(PostViewContainerWrapper.find('.comment_container').at(2).find('.content_container').text()).toBe("new_comment_reply");
  });
})