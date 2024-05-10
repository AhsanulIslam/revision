var sname = "Ahsanul";
var sid   = 12;
var dept  = "CS";


var getName =()=>{
	return "Ahsanul";
}

var setName=(sname)=>{
	return "Done!";
}

// module.exports.id = sid;     //making public
// module.exports.getName = getName;

// module.exports = {
// 	name : 'alamin',
// 	id   : 123,
// 	dept : 'cs',

// 	getName: function(){
// 		return this.name;
// 	}
// } 

// module.exports =  function(){
// 	return{
// 		name : 'IMON',
// 		id   : 1234,
// 		dept : 'cs',

// 		getName: function(){
// 			return this.name;
// 		}
// 	}
// }


exports class student {
	name ='Imon';
	id   = 123;
	dept = 'CSE';
	getName(){
		return this.name;
	}
}