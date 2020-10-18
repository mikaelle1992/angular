var message = "hello";
console.log(message);
var episode = 4;
console.log("this is episode " + 4);
episode = episode + 1;
console.log("Next episode is " + episode);
var favoriDroid;
favoriDroid = "BB-8";
console.log("my favorite droid is " + favoriDroid);
var isEnoughToBeatMF = function (parsecs) {
    return parsecs < 12;
};
var distance = 14;
console.log("is " + distance + " parsecs enough to beat Millennim Falcon? " + (isEnoughToBeatMF(distance) ? 'yes' : 'no'));
var call = function (name) { return console.log("do you copy " + name + " ? "); };
call('R2');
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("inc (5,1)= " + inc(5, 1));
console.log("inc (5)= " + inc(5));
