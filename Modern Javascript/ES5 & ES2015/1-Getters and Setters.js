// Getters & Setters


var obj = {
    a: 7,
    get b(){
        return this.a + 1;
    },
    set b(x){
        this.a = x/2;
    }
};

console.log("First Example");
console.log("-------------");
console.log("obj.a: "+obj.a);
console.log("obj.b: "+obj.b);
obj.b = 50;
console.log("obj.a: "+obj.a+'\n');

var human = {
    firstName: 'Mike',
    lastName: 'Adams',
    get fullName() {
        return this.firstName+' '+this.lastName;
    },
    set fullName(value) {
        var fullNameArray = value.split(' ');
        this.firstName = fullNameArray[0];
        this.lastName = fullNameArray[1];
    }
};

console.log("Second Example");
console.log("--------------");

console.log("human.fullName: "+human.fullName);

console.log("Changing the human's fullName...");
human.fullName = "John Doe";

console.log("human.fullName: "+human.fullName);
console.log("");










