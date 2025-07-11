var a =593;
var b = 4;
function number( a , b ){
    for (var i = 0 ; i<b ; i++){
        if (a% 10 !=0){
            a = a-1;
        }
        else {
            a=a/10;
        }
    }
    return a;
}
console.log(number(a,b))