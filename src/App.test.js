import React from 'react';
import { mount } from "enzyme";
import {
  createMockEnvironment,
  MockPayloadGenerator,
} from 'relay-test-utils';
import * as add_user from "./mutations/add_user";
import App from "./App";
jest.mock('./components/posts/PostsContainer', ()=>{
  return function(){
    return (<></>);
  }
});

class LocalStorageMock {
  constructor() {
    this.store = {};
  }
  clear() {
    this.store = {};
  }
  getItem(key) {
    return this.store[key] || null;
  }
  setItem(key, value) {
    this.store[key] = value.toString();
  }
  removeItem(key) {
    delete this.store[key];
  }
}
global.localStorage = new LocalStorageMock();

describe("App", ()=>{
  test("create new user first time", async ()=>{
    const MockEnvironment = createMockEnvironment();
    const addUserSpy = jest.spyOn(add_user,'default');
    const AppWrapper = mount(<App environment={MockEnvironment} />);
    expect(addUserSpy).toBeCalledTimes(1);
    const operation = MockEnvironment.mock.getMostRecentOperation();
    MockEnvironment.mock.resolve(operation, MockPayloadGenerator.generate(operation,{
      User(context, generateId) {
        return {
          "id": `new_user_123`,
          "user_id": "new_user_id_123",
          "created_ts": 1604893481,
          "modified_ts": 1604893481
        }
      }
    }));
    AppWrapper.update();
    expect(localStorage.getItem("user")).toBe("new_user_123");
    expect(localStorage.getItem("user_id")).toBe("new_user_id_123");
  })
})