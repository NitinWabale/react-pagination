/* eslint-env jest, node */
import React from 'react';
import { shallow } from 'enzyme';
import { HeroCard } from './HeroCard';

describe('HeroCard', () => {
    const makeWrapper = (props = {}) => shallow(<HeroCard {...props} />);
    
    it('should have a displayName', () => {
        expect(HeroCard.displayName).toEqual('HeroCard');
    });

    it('should render hero card', () => {
        const wrapper = makeWrapper({hero : { avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg"
        , first_name: "Nitin", last_name: "test", id: 456  }});
        const page = wrapper.find('.hero-card');
        expect(page.isEmpty()).toBe(false);
    });

    it('should render id in card', () => {
        const wrapper = makeWrapper({hero : { avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg"
        , first_name: "Nitin", last_name: "test", id: 456  }});
        const page = wrapper.find('.hero-id');
        expect(page.text()).toBe("456");
    });

    it('should render name in card', () => {
        const wrapper = makeWrapper({hero : { avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg"
        , first_name: "Nitin", last_name: "test", id: 456  }});
        const page = wrapper.find('.hero-name');
        expect(page.text()).toBe("Nitin test");
    });

    // it('should render hero card', () => {
    //     const wrapper = makeWrapper({ avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg"
    //     , first_name: "Nitin", last_name: "test", id: 456  });
    //     const page = wrapper.find('.hero-card');
    //     expect(page.isEmpty()).toBe(false);
    // });
});
