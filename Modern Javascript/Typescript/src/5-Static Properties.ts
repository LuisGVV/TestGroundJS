class Alien {
    public name: string;
    private static buddyCount: number = 0;
    private static masterName = 'Yoda'
    constructor(name: string){
        this.name = name;
        Alien.buddyCount++;
        console.log(`My dad ${ Alien.masterName } created me, currently I have ${ Alien.buddyCount }`);
    }
    greet(): string{
        return `Hello my name is ${ this.name } and currently in this scope there are ${ Alien.buddyCount } buddies`;
    }
}

console.log("Starting 5-Static Properties.ts");

let alienShip: Alien[] = [];

let nameArray:string [] = ["Luis", "Jose", "Marvin", "Bryan", "Lirroy", "David","Raul"];

var popRandomString = function (array: string[] ): string {
    var randomIndex: number = Math.floor((Math.random()*10)+1);
    var randomName : string  = array[randomIndex];  
    array.splice(randomIndex, 1);
    return randomName;
}

nameArray.forEach(function(value){
    var alien: Alien = new Alien(value);
    alienShip.push(alien);
});

alienShip.forEach(function(value){
    console.log(value.greet());
});

