let num = 0;
let limit = 5000;
for(let i = 0; i <= limit; i++ ){
    if(i % 2 !== 0){
        console.log(i);
        num++;
    }
}
console.log("There are " + num + " numbers that are odd under " + limit);