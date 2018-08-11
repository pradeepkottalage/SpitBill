app.controller('billsListCtrl', ['$scope', function($scope){
    
    $scope.showAddBill = false;
    
    $scope.billModel = {};
    $scope.bill = [];
    $scope.BillsAdded = JSON.parse(localStorage.getItem("BillsAdded"));  
    $scope.FriendsAdded =  JSON.parse(localStorage.getItem("friendsAdded"));  
    $scope.saveBill = function(data){
       
       $scope.bill.push({Desc: data.billDesc, Amt:data.billAmount, linkedTo:[]});
       localStorage.setItem("BillsAdded", JSON.stringify($scope.bill));
       
       $scope.BillsAdded = JSON.parse(localStorage.getItem("BillsAdded"));  
    }
    $scope.saveEdit = function(data){
        $scope.BillsAdded.map(function(item, ind, arr){
                if(item.Desc == data.Desc){
                    item.Amt = data.Amt;
                }
        })
        localStorage.setItem("BillsAdded", JSON.stringify($scope.BillsAdded)); 
    }
    //var linkedToFriend = [];
    $scope.linkFriend = function(BillData,friend) {
        
      if(BillData.linkedTo.indexOf(friend.name) == -1){
          
       // linkedToFriend.push(friend);
        $scope.BillsAdded.map(function(item, ind, arr){
            if(item.Desc == BillData.Desc){
                item.linkedTo.push(friend);
                item["share"] = item.Amt/item.linkedTo.length;
            }
        })
        localStorage.setItem("BillsAdded", JSON.stringify($scope.BillsAdded));
      }
       
    }
}])