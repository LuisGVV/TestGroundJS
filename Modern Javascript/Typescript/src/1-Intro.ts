
// Typescript checks variable types
var name: string = 'jen';
var age: number = 2;
var flag: boolean = false;

// Typescript compiler throws error if function returns another type
const log = (item: string): string => {
    return 'not an error'; 
}

const names = ['luis', 'john'];

// names.push(3); // implicitly detects array type

const primeNumbers: number[] = [2,3,5]
