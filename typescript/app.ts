let message:string ="hello"
console.log(message)

let episode:number = 4
console.log("this is episode " + 4)
episode = episode + 1
console.log("Next episode is " + episode)

let favoriDroid:string
favoriDroid = "BB-8"

console.log("my favorite droid is " + favoriDroid)

let isEnoughToBeatMF =  function(parsecs: number) : boolean{
    return parsecs<12
}

let distance = 14
console.log(`is ${distance} parsecs enough to beat Millennim Falcon? ${isEnoughToBeatMF(distance) ? 'yes' : 'no'}`)

let call = (name :string) => console.log(`do you copy ${name} ? `) 
call('R2')

function  inc (speed:number, inc:number = 1): number {
   return speed + inc 
}

console.log(`inc (5,1)= ${inc(5, 1)}`)
console.log(`inc (5)= ${inc(5)}`)
