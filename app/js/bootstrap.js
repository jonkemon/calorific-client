(function() {
	var application = angular.module('Shopping', []);

	application.controller('ShoppingItemsController', function() {
		this.products = shopItems;
	});

	application.controller('PanelController', function() {
		this.tab = 1;

		this.selectTab = function(setTab) {
			console.info('setTab: ', setTab);
			this.tab = setTab;
			//console.info('this.tab: ', this.tab);
		};

		this.isSelected = function(selectedTab) {
			console.log(' this.tab === selectedTab: ', this.tab === selectedTab);
			return this.tab === selectedTab;
		}
	});

	application.directive('reviewPanels', function() {
		return {
			type: 'E',
			templateUrl: 'app/js/templates/review-panels.html',
			controllerAs: 'PanelController'
		}
	});

	// shop data
	var shopItems = [
		{
			name: 'Soap',
			price: '001.50',
			images: [
				{
					thumb: 'app/img/soap.jpg'
				}
			],
			description: 'It`s a bar of soap silly.',
			specification: '4 inches long and 2 inches wide',
			reviews: [
				{
					score: 4,
					body: 'It got me clean - jobs a goodn',
					author: 'jonkemon@hotmail.com'
				},
				{
					score: 3,
					body: 'Smells better than my sweat',
					author: 'mazieswake@gmail.com'
				},
			]
		},
		{
			name: 'Mac Book Pro',
			price: '999.95',
			images: [
				{
					thumb: 'app/img/mbp.png'
				}
			],
			description: 'Tool of choice for any jobing web developer.',
			specification: '8 inches wide and 13 inches long, weighs in at roughly 3lbs',
			reviews: [
				{
					score: 3,
					body: 'So far so good, although Apple slowly ruining the consistency and quality of their products.',
					author: 'jonkemon@hotmail.com'
				},
				{
					score: 3,
					body: 'Yup, does what I expect',
					author: 'jonkemon@hotmail.com'
				}
			]
		},
		{
			name: 'Lobster',
			price: '008.50',
			images: [
				{
					thumb: 'app/img/lobster.jpg'
				}
			],
			description: 'Lobster Lobster',
			specification: 'Varying depending on the waters but roughly 8 inches long and 4 inches wide',
			reviews: [
				{
					score: 3,
					body: 'Hmmm....nom...nom..nom.nom.nom',
					author: 'jonkemon@hotmail.com'
				},
				{
					score: 3,
					body: 'Lobster, lobster lobster lobster',
					author: 'jonkemon@hotmail.com'
				}
			]
		},
		{
			name: 'iPad',
			price: '299.95',
			images: [
				{
					thumb: 'app/img/ipad.jpg'
				}
			],
			description: 'Still ultimately a silly luxury product but stumbled across some excellent child care and education usage.',
			specification: '7 inches long and 5 inches wide',
			reviews: [
				{
					score: 3,
					body: 'Well, I guess roughly 16 million sold on a monthly basis for several years; I guess that can`t really be argued with!',
					author: 'jonkemon@hotmail.com'
				},
				{
					score: 3,
					body: 'Total waste of cash',
					author: 'jonkemon@hotmail.com'
				}
			]
		}
	]
}());