//Observer Pattern (basic pub-sub)
class YoutubeChannel{
    constructor(){
        this.subscribers = [];
    }
    subscribe(user){
        this.subscribers.push(user);
        user.update(`${user.name} have subscribed the channel`);
    }
    unsubscribe(user){
        this.subscribers.filter(sub => sub !== user)
        console.log("you have unsubscribe the channel");
    }
    notify(msg){
        this.subscribers.forEach(sub => sub.update(msg));
    }
}

class User{
    constructor(name){
        this.name = name;
    }
    update(data){
        console.log(`${this.name}, ${data}`);
    }
}
let channel = new YoutubeChannel();
console.log(channel);
let user1 = new User("iphat");
let user2 = new User("john");
channel.subscribe(user1);
channel.subscribe(user2);

channel.notify("new video uploaded...");

//