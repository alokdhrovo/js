(function() {
        var gems = [
		{ 
			name: 'alpha', 
			price: 1.95, 
			description: 'this is an alpha product', 
			canPurchase: true,
           	},
		{
			name: 'beta', 
                        price: 11.95,
                        description: 'this is an beta product',
                        canPurchase: false,
		},
                {
                        name: 'charlie', 
                        price: 5.25,
                        description: 'this is an charlie product',
                        canPurchase: true,
                }
	];

	var app = angular.module('gemStore',[]);

	app.controller('StoreController',function() {
		this.products = gems;
	});
})();
