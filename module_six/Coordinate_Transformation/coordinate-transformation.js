function translate2d(dx, sx){
	return function (x, y){
		return [dx + x, sx + y];
	};
}

function scale2d(xd, yd){
	return function(x, y){
		return [xd * x, yd * y]
	};
}
const movecoordinate = scale2d(2, 3);
console.log(movecoordinate(3, 4));
