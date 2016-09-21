
interface BakedGood {
    sugar: number;
    name: string;
    bake(mins: number): string;
    icing?: boolean; // Optional value
}

const cake: BakedGood = {
    sugar: 23,
    name: 'cherry cake',
    bake(min:number){
        return `Will be done in ${min}...`
    }
};


