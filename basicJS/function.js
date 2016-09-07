# function

// as var
var foo = function(a,b){
	a+b;
}

console.log("%d",foo(1+2));

function bar(a,func){
	console.log("%d",a);
	func(a,2);
}

bar(20,foo);

