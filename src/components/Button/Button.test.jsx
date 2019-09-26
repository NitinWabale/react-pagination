/* eslint-env jest, node */
import React from 'react';
import { shallow } from 'enzyme';
import { Button } from './Button';

describe('Button', () => {
    let clicked = false;

    const makeWrapper = (props = {}, children = null) =>
        shallow(
            <Button
                onClick={() => {
                    clicked = true;
                }}
                {...props}
            >
                {children}
            </Button>
        );

    it('should have a displayName', () => {
        expect(Button.displayName).toEqual('Button');
    });

    it('should render with the correct wrapper', () => {
        const wrapper = makeWrapper({}, '');
        const button = wrapper.find('button');
        expect(button.text()).toEqual('Create New');
    });

});
