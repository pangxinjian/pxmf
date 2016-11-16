angular.module('myapp',[])
.directive('section',function(){
		return{
			restrict:'E',
			replace:true,
			link:function(element){
					var myScroll= new IScroll('#wrapper',{
			        scrollbars: true,
			        disableMouse: true,
			        disablePointer: true,
			        scrollbars: 'custom'
				})
		    }
		}
	})