angular.module('ngLoadImg',[]).directive('actualSrc', function () {
	return{
		link: function postLink(scope, element, attrs) {
			attrs.$observe('actualSrc', function(newVal, oldVal){
				 element.attr("src","data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==");
				 if(newVal){
					 img = new Image();
					 img.src = newVal;
					 angular.element(img).bind('load', function () {
						 element.attr("src", newVal);
					 });
				 }
			});

		}
	}
})