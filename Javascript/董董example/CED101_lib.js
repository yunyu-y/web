function sum(a, b, c){  //a,  b,  c,  arguments
	total = 0;
	for(i=0; i<arguments.length; i++){
		total += arguments[i];
	}
	return total;
}

var times = 1000;

function $(id){
  let obj = document.getElementById(id);
  obj.css = function(attr, value){
    obj.style[attr] = value;
  }
  return obj
} 