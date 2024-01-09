function fizzBuzz (max){
    let fizz = 0 ;
    let fuzz = 0 ;
    for (let i = 1 ; i <= max ; i ++){ 
        let resFizz = i / 3 ;
        let resFuzz = i / 5 ;
        if (Number.isInteger(resFizz) ||  Number.isInteger(resFuzz)){
            if (Number.isInteger(resFizz) && Number.isInteger(resFuzz)){
                fizz ++ ; fuzz ++ ;
            }
            else if (Number.isInteger(resFizz)) {
                fizz ++ ;
            }
            else if (Number.isInteger(resFuzz)) {
                fuzz ++ ;
            }
        }
    }
    console.log (`fizz = ${fizz} , fuzz = ${fuzz}`);
} 

function test () {
    let array = [ 1 , 15 , 70 ]
    for (x of array){
        fizzBuzz(x);
    }
}