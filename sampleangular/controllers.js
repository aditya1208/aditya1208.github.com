//Define a module for the app
var TodoApp = angular.module("TodoApp", []);
//Pass the scope to the controller
TodoApp.controller("GroceryCtrl", function($scope) {
$scope.groceries = [
					{ 'item':'Soy Milk',
					'quantity': 2,
					'store': 'Publix'},
					{ 'item':'Oats',
					'quantity': 1,
					'store': 'Publix'},
					{ 'item':'Beans',
					'quantity': '1lb',
					'store': 'Walmart'},
					{ 'item':'Lettuce',
					'quantity': 1,
					'store': 'Walmart'},
					{ 'item':'Wheat bread',
					'quantity': 1,
					'store': 'Publix'},
                    ];
  //Function to add items
$scope.addRow = function(){		
	$scope.groceries.push({ 'item':$scope.item, 'quantity': $scope.quantity, 'store':$scope.store });
	$scope.item='';
	$scope.quantity='';
	$scope.store='';
};
//Function to remove items
$scope.removeRow = function(item){				
		var index = -1;		
		var comArr = eval( $scope.groceries );
		for( var i = 0; i < comArr.length; i++ ) {
			if( comArr[i].item === item ) {
				index = i;
				break;
			}
		}
		if( index === -1 ) {
			alert( "Something went wrong" );
		}
		$scope.groceries.splice( index, 1 );		
	};
});
