import React from 'react'
import {shallow} from 'enzyme'

import {Header} from './header'
import InfoModal from './info-modal'

describe('<Header />', () => {
	it('should render without crashing', () => {
		shallow(<Header />)
	})

	it('should render title', () => {
		const wrapper = shallow(<Header />)

		expect(wrapper.find('h1').text()).toEqual('HOT or COLD')
	})

	it('should render the info modal when showInfoModal is false', () => {
		const wrapper = shallow(<Header showInfoModal={false}/>)
		expect(wrapper.find(InfoModal).exists()).toEqual(false)
	})

    it('Should render the info modal when showInfoModal is true', () => {
        const wrapper = shallow(<Header showInfoModal={true}/>);
        expect(wrapper.find(InfoModal).exists()).toEqual(true);
	});
})