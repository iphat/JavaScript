
//promises - The Promise object represents the eventual result (success or failure) of an asynchronous operation
.then((raw) => raw.json())

.then((data) => {
    console.log(data.results[0].name.first);
})
.catch((err) => {
    console.log(err);
});
let p = new Promise(function(resolve, reject){
    setTimeout(() => {
    // resolve();
    let rn = Math.floor(Math.random() * 10);
    if(rn > 5) resolve("selected : " + rn);
    else reject("rejected : " + rn);
  },3000);
});

// p.then(function(val){
//     console.log("Select..." , val);//  val = resolve
// })
// .catch(function(val){
//     console.log("reject...",val)// val = reject 
// })

//async  await 
//cleaner way to handle promises(.then and .catch)

async function abcd(){
    try{
        let val = await p;
        console.log("try...",val);
    }catch(err){
        console.log("err...",err)
    }
}
abcd();
