var txt = "abcdefg";
var txt1 = txt.length;
var txt2 = txt.slice(0, 4);
console.log(txt2);
var txt3 = "Come visit Microsoft!";
var txt4 = txt3.replace("Microsoft", "BGU");
console.log(txt4);




const d = new Date();
console.log(d);
var h = d.getHours();
console.log(h);

if (h < 12) {
    greeting = "good morning!";
} else if (h < 17) {
    greeting = "good afternoon!"
} else {
    greeting = "good evening!";
};
console.log(greeting);

function greet() {
    document.getElementById("p").innerHTML = greeting;
}

var cars = ["toyota", "honda", "ford"];
console.log(cars[0]);

var i;
for (i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

function play() {
    document.getElementById("img").src = "";
}

var imgs = [
    "images/BY1A4457.jpg",
    "images/J75_5568-1.jpg",
    "images/view.jpg"
]

var i = 0;

function play() {
    setTimeout(() => {
        document.getElementById("img").src = imgs[i];
        i++;
        if (i < imgs.length) {
            play();
        } else {
            i = 0;
        }
    }, 500);
}