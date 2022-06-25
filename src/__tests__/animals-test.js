import React from 'react';
import Animals from './../components/Animals.js';
import { shallow } from "enzyme";

// Country Select
describe('<Animals /> component', function () {
    it('Animals renders without crashing', function () {
        shallow(<Animals />);
    });

});