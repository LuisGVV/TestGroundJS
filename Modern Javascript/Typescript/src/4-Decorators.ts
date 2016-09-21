
// decorator is a function targeting, property, class, method

function clean(target){
    target.cleaned = true;
}

function clean2(value: boolean){
    return function(target){
        target.cleaned = value;
    }
}

@clean2(true)
// stack other decorators @dirty
class Animal {

}


