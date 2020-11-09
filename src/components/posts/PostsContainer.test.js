import React from 'react';
import { mount } from "enzyme";
import { MemoryRouter } from 'react-router'
import {GlobalContext} from "../../GlobalContext";
import {
  createMockEnvironment,
  MockPayloadGenerator,
} from 'relay-test-utils';
import PostsContainer from "./PostsContainer";
import {useHistory} from "react-router-dom";
import PostsPagination from "./PostsPagination";
jest.mock('react-router-dom', ()=>({
  ...jest.requireActual('react-router-dom'),
  useHistory: jest.fn(),
}));

const getMockState=(context,generateId,page)=>{
  const getPageUID=()=>`${page}${generateId()}`;
  return {
    "posts":{
      "edges": [{
        "cursor": getPageUID(),
        "node": {
          "id": getPageUID(),
          "user_id": getPageUID(),
          "title": `mock_post_title_${getPageUID()}`,
          "post_content": `mock_post_content_${getPageUID()}`,
          "image_url": "",
          "created_ts": 1604875061,
          "comments": {
            "edges": []
          }
        }
      },{
        "cursor": getPageUID(),
        "node": {
          "id": getPageUID(),
          "user_id": getPageUID(),
          "title": `mock_post_title_${getPageUID()}`,
          "post_content": `mock_post_content_${getPageUID()}`,
          "image_url": "",
          "created_ts": 1604875062,
          "comments": {
            "edges": []
          }
        }
      },{
        "cursor": getPageUID(),
        "node": {
          "id": getPageUID(),
          "user_id": getPageUID(),
          "title": `mock_post_title_${getPageUID()}`,
          "post_content": `mock_post_content_${getPageUID()}`,
          "image_url": "",
          "created_ts": 1604875063,
          "comments": {
            "edges": []
          }
        }
      },{
        "cursor": getPageUID(),
        "node": {
          "id": getPageUID(),
          "user_id": getPageUID(),
          "title": `mock_post_title_${getPageUID()}`,
          "post_content": `mock_post_content_${getPageUID()}`,
          "image_url": "",
          "created_ts": 1604875064,
          "comments": {
            "edges": []
          }
        }
      }]
    }
  }
}

describe("PostsContainer", ()=>{
  test("add_post", ()=>{
    const MockEnvironment = createMockEnvironment();
    const PostsContainerWrapper = mount(
      <MemoryRouter>
        <GlobalContext.Provider value={{user: "abc", user_id: "abc"}}>
          <PostsContainer environment={MockEnvironment} />
        </GlobalContext.Provider>
      </MemoryRouter>);
    MockEnvironment.mock.resolveMostRecentOperation(operation=>
      MockPayloadGenerator.generate(operation, {
        Query(context, generateId){
          return getMockState(context, generateId, 'page-1-');
        },
        PageInfo(context, generateId){
          return {
            hasNextPage: true,
            endCursor: generateId().toString()
          }
        }
      })
    );
    PostsContainerWrapper.update();
    expect(PostsContainerWrapper.find(PostsPagination).find('section').length).toBe(4);
    PostsContainerWrapper.find('.new_thread_text a').simulate("click");
    PostsContainerWrapper.update();
    PostsContainerWrapper.find("#input_title").instance().value="new_post_title";
    PostsContainerWrapper.find("#input_content").instance().value="new_post_content";
    PostsContainerWrapper.find("#post_form").simulate('submit');
    const operation = MockEnvironment.mock.getMostRecentOperation();
    MockEnvironment.mock.resolve(operation, MockPayloadGenerator.generate(operation,{
      PostEdge(context, generateId) {
        return {
          "cursor": `new_post_${generateId().toString()}`,
          "node": {
            "id": `new_post_${generateId().toString()}`,
            "user_id": "abc",
            "title": "new_post_title",
            "post_content": "new_post_content",
            "image_url": "",
            "created_ts": 1604874489,
            "comments": {
              "edges": []
            }
          }
        }
      }
    }));
    PostsContainerWrapper.update();
    expect(PostsContainerWrapper.find(PostsPagination).find('section').length).toBe(5);
    expect(PostsContainerWrapper.find(PostsPagination).find('section').at(0).find('.title_display').text()).toBe("new_post_title ");
    expect(useHistory).toHaveBeenCalledTimes(1);
  });

})