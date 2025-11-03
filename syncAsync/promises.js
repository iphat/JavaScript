//I believe clear communication and empathy are key to building strong professional relationships. "I'm always eager to take initiative and help the team stay organized and focused on goals."

//promises
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