import React from 'react';
import { render } from 'enzyme';

import ExampleComponent from './example-component';

describe('A suite', () => {
  it('should render to static HTML', () => {
    expect(render(<ExampleComponent />).text()).toEqual('Example Component');
  });
});
