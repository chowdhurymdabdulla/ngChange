var MovieController = function MovieController($scope) {

    $scope.newTitle = '';
    $scope.newYear = '';

    $scope.onChange= function onChange(){
        console.log('Change!', $scope.newTitle);
    };

    $scope.addMovie = function addMovie() {
        $scope.favorites.unshift({
            title: $scope.newTitle ,
            year: $scope.newYear
        });
    };
    $scope.onBlur = function onBlur(){
        console.log('Blur!');
    };
    $scope.onFocus = function onFocus(){
        console.log('Focus!');
    }
    $scope.favorites = [{
        title: 'The Shawshank Redemption',
        year: '1994'
    }, {
        title: 'Inception',
        year: '2010'
    }, {
        title: 'The Matrix',
        year: '1999'
    }, {
        title: 'Saving Private Ryan',
        year: '1998'
    }, {
        title: 'The Aviator',
        year: '2004'
    }];
    //console.log(self.favorites);
};


angular
    .module('app')
    .controller('MovieController', ['$scope', MovieController]);
