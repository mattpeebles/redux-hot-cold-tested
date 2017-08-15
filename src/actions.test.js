import {NEW_GAME, newGame, MAKE_GUESS, makeGuess, TOGGLE_INFO_MODAL, toggleInfoModal} from './actions'
import {expect} from 'chai'


describe('newGame', () => {
	it('should reset the correct answer', () => {
		const action = newGame()
		expect(action.type).to.be.equal(NEW_GAME)
		expect(action.correctAnswer).to.be.at.least(0)
		expect(action.correctAnswer).to.be.at.most(100)
	})
})

describe('makeGuess', () => {
	it('should add a new guess', () => {
		const guess = 13
		const action = makeGuess(guess)
		expect(action.type).to.be.equal(MAKE_GUESS)
		expect(action.guess).to.be.equal(guess)
	})
})

describe('toggleInfoModal', () => {
	it('should toggle boolean value of infoModal', () => {
		const action = toggleInfoModal()
		expect(action.type).to.be.equal(TOGGLE_INFO_MODAL)
	})
})