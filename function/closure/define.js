//向对应的i坐标添加对应的i
function fun1(){
	var result = new Array();
	for(var i=0;i<10;i++){
		result[i] = i;
	}
	console.log(result);
	return result;
}

//这个函数每个索引返回的都是函数，执行后返回的都是10，实际上引用的同一个变量i
function fun2(){
	var result = new Array();
	for(var i=0;i<10;i++){
		result[i] = function(){
			return i;
		}
	}
	return result;
}

/**
 * 我本来以为fun2中将i传入function就行，实际上这个function是一个函数定义，i是一个形参并不会将for循环中的i传入
 * console.log(fun3()[1]()); 是undefined
 * console.log(fun3()[1]1)); 是1 
 * 这就是上述说法
*/
function fun3(){
	var result = new Array();
	for(var i=0;i<10;i++){
		result[i] = function(i){
			var h = i;
			return i;
		}
	}
	return result;
}

function fun4(){
	var result = new Array();
	for(var i=0;i<10;i++){
		result[i] = function(num){
			return function(){
				return num;
			}(num);
		}(i);
	}
	return result;
}


function fun5(){
	var result = new Array();
	for(var i=0;i<10;i++){
		result[i] = function(num){
			return num;
		}(i);
	}
	return result;
}

console.log(fun5());