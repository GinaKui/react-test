import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from '../Root';
import App from '../components/App';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{name: 'fetched comment 1'}, {name: 'fetched comment 2'}]
  });
});

afterEach(() => {
  moxios.uninstall();
});

it('can fetch a list of comments and display them', (done) => {
  //attemp to render the *entire* app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );
  
  //find the 'fetchComments' button and click it
  wrapped.find('.fetch-comments').simulate('click');

  //expect to find a list of comments
  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find('li').length).toEqual(2);
    done();
    wrapped.unmount();
  });
});