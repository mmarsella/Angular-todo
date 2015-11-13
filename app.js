app = angular.module('todoApp',[]); // What's missing? Hint, it's more than one thing.

app.controller("TodosController", function($scope) { // What's missing?
	$scope.todos = []; // Store todo items here. What is the data type?
	$scope.button = false;

  $scope.addTodo = function addTodo(mv) { 
    $scope.todos.push(mv);
    $scope.mv = {};
    $scope.button = !$scope.button;

	};
	
  $scope.deleteAll = function deleteAll() { 
    $scope.todos = [];
	};

  $scope.addButton = function addButton(){
    $scope.button = !$scope.button;

  };



});