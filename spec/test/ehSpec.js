import MZsite from '../../components/js/MZsite.js'

describe("MZsite runs", function() {

	it("init() exists", function() {
		expect(MZsite().init()).not.toBe(null);
	});

	it("init() returns number", function() {
		expect(MZsite().init()).toBe(9);
	});

});
