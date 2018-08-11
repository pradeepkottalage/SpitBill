app.controller('friendsListCtrl',['$scope', function($scope){
   
        $scope.showAddBill = false;
        
        $scope.friend = {};
        $scope.friendList = [];
       $scope.FriendsAdded =  JSON.parse(localStorage.getItem("friendsAdded"));  
       
        $scope.saveFriend = function(data){
           
            $scope.friendList.push({name: data.name});
           localStorage.setItem("friendsAdded", JSON.stringify($scope.friendList));
           
           $scope.FriendsAdded = JSON.parse(localStorage.getItem("friendsAdded"));  
        }
    
}])