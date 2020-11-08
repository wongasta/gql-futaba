import React from 'react';
import { mount } from "enzyme";
import { MemoryRouter } from 'react-router'
import Header from './Header';
import toJson from "enzyme-to-json";

describe("Header", ()=>{
  test("Construction Snapshot", ()=>{
    const headerWrapper = mount(<MemoryRouter><Header /></MemoryRouter>);
    const headerWrapperInstance = headerWrapper.find(Header);
    expect(toJson(headerWrapperInstance)).toMatchSnapshot();
  })
})