// Imagine you're in a library with a very long bookshelf. You only have a small window to look through. Instead of trying to read every book title at once, you only read the titles of the books you can see through the window. As you move the window, you read the new titles that come into view.
// This code does exactly that, but for images on a website! It's called "Lazy Loading". It makes websites faster by only loading images when you are about to see them.



let imgs = document.querySelectorAll("img");
// console.log(imgs);

const observer = new IntersectionObserver(function(entries, observer){
    entries.forEach(function(entry){
        if(entry.isIntersecting){
            const img = entry.target;
            img.src = img.dataset.src;//we hide the real image link inside 'data-src', and grab it later using 'dataset.src'
            img.classList.add("loaded");
            observer.unobserve(entry);//Stop watching this image — it's already loaded.
        }
    });
},{
    //It checks: “Is this thing visible on the screen?”
    root : null,//means it watches the main screen
    threshold: 0.1,//when 10% of image is come inside then it will be vivsible
});
imgs.forEach(function(img){
    observer.observe(img);
});