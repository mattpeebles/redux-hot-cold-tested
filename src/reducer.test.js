import {
   newGame,
    makeGuess,
    toggleInfoModal
} from './actions'

import {default as reducer} from './reducer'
import {expect} from 'chai'


describe('reducer', () => {
	const guess1 = 25
	const guess2 = 60
	const guess3 = 80
	const guess4 = 95
	const guess5 = 100
	const correctAnswer = 100
	const infoModalFalse = false
	const infoModalTrue = true

	it('Should set the initial state when nothing is passed in', () => {
		const state = reducer(undefined, {type: '_UNKNOWN'})
		expect(state.guesses).to.be.an('array').that.is.empty
		expect(state.feedback).to.be.equal('Make your guess!')
		expect(state.correctAnswer).to.be.at.least(0)
		expect(state.correctAnswer).to.be.at.most(100)
		expect(state.showInfoModal).to.be.equal(false)
	})

	it('Should return the current state on an unknown action', () => {
		let currentState = {}
		const state = reducer(currentState, {type: '_UNKNOWN'})
		expect(state).to.be.equal(currentState)
	})

	describe('newGame', () => {
		it('should reset the state', () => {
			let state;
			state = reducer(state, newGame)
			expect(state.guesses).to.be.an('array').that.is.empty
			expect(state.feedback).to.be.equal('Make your guess!')
			expect(state.correctAnswer).to.be.at.least(0)
			expect(state.correctAnswer).to.be.at.most(100)
			expect(state.showInfoModal).to.be.equal(false)
		})
	})

	describe('makeGuess', () => {
		it('should add a new guess to state array', () => {
			let state;
			state = reducer(state, makeGuess(guess1))
			expect(state.guesses).to.be.an('array').that.includes(guess1)
		})

		it('should add retain old guesses when new guess is made', () => {
			let state;
			state = reducer(state, makeGuess(guess1))
			state = reducer(state, makeGuess(guess2))
			expect(state.guesses).to.be.an('array').that.includes(guess1)
			expect(state.guesses).to.be.an('array').that.includes(guess2)

			state = reducer(state, makeGuess(guess3))
			state = reducer(state, makeGuess(guess4))
			state = reducer(state, makeGuess(guess5))

			expect(state.guesses).to.be.an('array').that.includes(guess1)
			expect(state.guesses).to.be.an('array').that.includes(guess2)
			expect(state.guesses).to.be.an('array').that.includes(guess3)
			expect(state.guesses).to.be.an('array').that.includes(guess4)
			expect(state.guesses).to.be.an('array').that.includes(guess5)
			expect(state.guesses).to.have.lengthOf(5)
		})

		it('should not add a guess that has already been made', () => {
			let state;
			state = reducer(state,makeGuess(guess1))
			state = reducer(state, makeGuess(guess1))

			expect(state.guesses).to.be.an('array').that.includes(guess1)
			expect(state.guesses).to.have.lengthOf(1)
		})

		it('should provide proper feedback', () => {
			let state;
			state = reducer(undefined, {type: '_UNKNOWN'})
			state.correctAnswer = correctAnswer
			
			state = reducer(state, makeGuess(guess1))
			expect(state.feedback).to.be.equal('You\'re Ice Cold...')
			
			state = reducer(state, makeGuess(guess2))
			expect(state.feedback).to.be.equal('You\'re Cold...')

			state = reducer(state, makeGuess(guess3))
			expect(state.feedback).to.be.equal('You\'re Warm')

			state = reducer(state, makeGuess(guess4))
			expect(state.feedback).to.be.equal('You\'re Hot!')
			
			state = reducer(state, makeGuess(guess5))
			expect(state.feedback).to.be.equal('You got it!')

		})
	})

	describe('toggleInfoModal', () => {
		it('should toggle boolean value of showInfoModal', () => {
			let state;

			state = reducer(state, toggleInfoModal())
			expect(state.showInfoModal).to.be.true

			state = reducer(state, toggleInfoModal())
			expect(state.showInfoModal).to.be.false
		})
	})
})