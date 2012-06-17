
//Function rewrite itself after running once
function add2(a){
	a = a*2;
	add2 = function add4(b){
		return 	b*4;
	}
	return a;
}












