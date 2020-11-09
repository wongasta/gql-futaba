import React from 'react';
import { mount } from "enzyme";
import { MemoryRouter } from 'react-router'
import {GlobalContext} from "../../GlobalContext";
import {QueryRenderer} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import {
  createMockEnvironment,
  MockPayloadGenerator,
} from 'relay-test-utils';
import PostsPagination from "./PostsPagination";

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

describe("PostsPagination", ()=>{
  test("render and load more", ()=>{
    const MockEnvironment = createMockEnvironment();
    const PostsPaginationWrapper = mount(
      <MemoryRouter>
        <GlobalContext.Provider value={{user: "abc", user_id: "abc"}}>
          <QueryRenderer
            environment={MockEnvironment}
            query={graphql`
              query PostsPaginationTestQuery($count: Int) @relay_test_operation{
                ...PostsPagination_posts @arguments(count: $count)
              }
            `}
            variables={{count: 4}}
            render={({error,props})=>{
              if(!props) return null;
              return <PostsPagination posts={props}/>
            }}
          />
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
    PostsPaginationWrapper.update();
    expect(PostsPaginationWrapper.find(PostsPagination).find('section').length).toBe(4);
    expect(PostsPaginationWrapper.find('.pagination_button').props().disabled).toBe(false);
    PostsPaginationWrapper.find('.pagination_button').simulate('click');
    MockEnvironment.mock.resolveMostRecentOperation(operation=>
      MockPayloadGenerator.generate(operation, {
        Query(context, generateId){
          generateId();
          return getMockState(context, generateId, 'page-2-');
        },
        PageInfo(context, generateId){
          return {
            hasNextPage: false,
            endCursor: generateId().toString()
          }
        }
      })
    );
    PostsPaginationWrapper.update();
    expect(PostsPaginationWrapper.find(PostsPagination).find('section').length).toBe(8);
    expect(PostsPaginationWrapper.find('.pagination_button').props().disabled).toBe(true);
  })
})