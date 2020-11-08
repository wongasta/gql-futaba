import React from 'react';
import { mount } from "enzyme";
import { MemoryRouter } from 'react-router'
import graphql from 'babel-plugin-relay/macro';
import toJson from "enzyme-to-json";
import {QueryRenderer} from 'react-relay';
import {GlobalContext} from "../../GlobalContext";
import {
  createMockEnvironment,
  MockPayloadGenerator,
} from 'relay-test-utils';
import PostContainer from "./PostContainer";

describe("PostContainer", ()=>{

  afterAll(()=>{
    jest.clearAllMocks();
  })

  test("Post::initial render", ()=>{
    const mockEnvironment = createMockEnvironment();
    const PostContainerWrapper = mount(<MemoryRouter>
      <GlobalContext.Provider value={{user: "abc", user_id: "abc"}}>
        <QueryRenderer
          environment={mockEnvironment}
          query={graphql`
            query PostContainerTestQuery($id: ID!, $comment_count: Int) @relay_test_operation{
              post(id: $id){
                ...PostContainer_post @arguments(comment_count: $comment_count)
              }
            }
`         }
          variables={{
            id: 'globalid_123',
            comment_count: 2147483647
          }}
          render={({error, props})=>{
            if(!props) return null;
            return <PostContainer post={props.post} />
          }}
        />
      </GlobalContext.Provider>
    </MemoryRouter>);
    mockEnvironment.mock.resolveMostRecentOperation(operation=>
      MockPayloadGenerator.generate(operation, {
        Post(context,generateId){
          return {
            "id": generateId().toString(),
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
    PostContainerWrapper.update();
    const children = PostContainerWrapper.find(PostContainer).find('section').children();
    expect(children.length).toBe(4);
    expect(toJson(PostContainerWrapper.find(PostContainer).find('section'))).toMatchSnapshot();
  });

});