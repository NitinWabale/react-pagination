/* eslint-env jest, node */
import React from 'react';
import { shallow } from 'enzyme';
import { Pagination } from './Pagination';

describe('Pagination', () => {
    const makeWrapper = (props = {}) => shallow(<Pagination {...props} />);
    
    it('should have a displayName', () => {
        expect(Pagination.displayName).toEqual('Pagination');
    });
    it('should return null when one record', () => {
        const wrapper = makeWrapper({ totalRecords: 1 });
        const page = wrapper.find('.pagination');
        expect(page.isEmpty()).toBe(true);
    });

    it('should return valid page count', () => {
        const wrapper = makeWrapper({ totalRecords: 20, pageLimit: 5 });
        const page = wrapper.find('.pagination');
        const page1 = page.find('.page-item');
        expect(page1.length).toBe(4);
    });
});
