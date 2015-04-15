describe('Unit: jm.i18next - Provider behavior for .noConflict()', function () {

	'use strict';

	var $i18next,
		ref = window.i18n;

	beforeEach(function () {

		module('jm.i18next', function ($i18nextProvider) {

			$i18nextProvider.noConflict();
		});

		inject(function (_$i18next_) {
			$i18next = _$i18next_;
		});

	});

	it('should call i18n.noConflict() internally', function () {

		expect(window.i18next).toBeDefined();
		expect(window.i18n.isFakeConflictingLib).toBeTruthy();
	});

	afterEach(function () {
		window.i18n = ref;
	});

});
