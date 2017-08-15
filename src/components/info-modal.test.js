import React from 'react'
import {shallow} from 'enzyme'

import {InfoModal} from './info-modal'

describe('<InfoModal />', () => {
	it('should render without crashing', () => {
		shallow(<InfoModal />)
	})

	it('should dispatch hide on callback', () => {
		const dispatch = jest.fn()
		const wrapper = shallow(<InfoModal dispatch={dispatch} />)

		wrapper.find('.close').simulate('click', {
			preventDefault() {}
		})

		expect(dispatch).toHaveBeenCalled()
	})
})