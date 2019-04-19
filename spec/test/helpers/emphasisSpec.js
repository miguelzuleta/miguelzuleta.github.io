import emphasis from '../../../components/js/helpers/emphasis.js'

describe('Elements wrapped in emphasis tag', () => {
	it('doesnt do anything when string doesnt have "**"', () => {
		expect(emphasis('this is text')).toBe('this is text');
	})

	it('wraps string in EM tags when it has "**"', () => {
		expect(emphasis('*this is text*')).toBe('<em>this is text</em>');
	})

	it('doesnt return empty EM tags', () => {
		expect(emphasis('* *')).not.toBe('<em></em>');
		expect(emphasis('**')).not.toBe('<em></em>');
	})
})
