var appUrl = "http://localhost:3000/dangchieu"
var appUrl1 = "http://localhost:3000/sapchieu"
var appUrl2 = "http://localhost:3000/user"

    app.controller("myCtrl" , function($scope , $http){
        $scope.sapchieu = []
        $scope.now = new Date().toLocaleDateString() ;
        $scope.tomorow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toLocaleDateString();
        $http.get(appUrl).then(function(res){
            $scope.dangchieu = res.data
        })
        $http.get(appUrl1).then(function(res){
            $scope.sapchieu = res.data
        })
        
    $scope.inThongTin1 = function(index){
        $scope.index = index
        $scope.Tt = $scope.dangchieu[index]
    }
    $scope.inThongTin2 = function(index){
    $scope.index = index
    $scope.Tt = $scope.sapchieu[index]
    }
    $scope.Thanhtoan = function(index){
        $scope.index = index
        $scope.TT2 = $scope.dangchieu()
    }
    })
    app.run(function($rootScope){
    $rootScope.$on('$routeChangeStart', function(){
        $rootScope.loading = true
    })
    $rootScope.$on('$routeChangeSuccess', function(){
        $rootScope.loading = false
    })
    $rootScope.$on('$routeChangeError', function(){ 
        $rootScope.loading = false
        alert("Lỗi, không tải được template")
    })
    })
    app.controller("dangnhap" , function($scope , $http){
        $http.get(appUrl2).then(function(res){
            $scope.user = res.data
        })
        $scope.userdn = null
        $scope.Dangnhap = function(){
            if ($scope.user.find((x) => x.Gmail == $scope.gmaildn && x.Mk == $scope.mkdn)){
                $scope.userdn = $scope.user.find((x) => x.Gmail == $scope.gmaildn && x.Mk == $scope.mkdn);
                document.getElementById("closedn").click();
                document.getElementById('frmdk').style.visibility = 'hidden'
                document.getElementById('frmdn').style.visibility = 'hidden'
                document.getElementById('TbTc').style.visibility = 'visible'
                alert($scope.userdn.Ten)
            }
            else{
                alert("Sai")
            }
        }
    
    })
    app.controller("dangki" , function($scope , $http){
        $http.get(appUrl2).then(function(res){
            $scope.user = res.data
        })
        $scope.userdn = null
        $scope.Dangki = function(){
            if ($scope.user.find((x) => x.Gmail == $scope.gmaildk) != null){
                alert("Tài khoản hiện đã có")
            }
            else{
                $http.post(appUrl2 , {
                    "Ten": $scope.Tendk,
                    "Gmail":$scope.gmaildk,
                    "Mk" : $scope.mkdk,
                })
               
                document.getElementById('closedn').click();
                alert("Đăng kí thành công")
                
            }
        }
    })

app.controller("page",function($scope){

    
})