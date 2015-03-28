describe('Unit: jm.i18next - Provider behavior for .noConflict()', function () {

	'use strict';

	var $i18next;
	/*var i18nextOptions = {
		lng: 'de-DE',
		useCookie: false,
		useLocalStorage: false,
		fallbackLng: 'dev',
		resStore: {
			'de-DE': {
				translation: {}
			},
			'dev': {
				translation: {}
			}
		}
	};*/
	var ref = window.i18n;

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
	});

	afterEach(function () {
		window.i18n = ref;
	});

});
