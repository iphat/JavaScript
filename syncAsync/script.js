
//sync async

//callback - A callback in JavaScript is a function passed as an argument to another function 
// function set(fnc){
//     setTimeout(fnc,Math.floor((Math.random()*10)*1000));
// }
// set(function(){
//     console.log("hi...");
// });

//callBack hell
function profile(username, cb){
    setTimeout(() => {
        console.log(`profile fetched of ${username}`);
        cb({_id: 123, username, age: 26, email:"abc23@gmail.com" });
        // console.log(cb);
    },1000);
}
function anotherProfile(id,cb){
    setTimeout(() => {
        cb({_id: id, posts: ["hey", "hello","working"]})
    },2000);
}
function savedPosts(id, cb){
    console.log("fetching all posts")
    setTimeout(() => {
        cb({_id: id, saved: [1,2,3,4,5]})
    }, 3000)
}

profile("iphat", function(data){
    console.log(data);
    // console.log(data.username);
    anotherProfile(data._id, function(post){
        console.log(post.posts);
        savedPosts(data._id, function(saved){
            console.log(saved);
        })
    })
});

