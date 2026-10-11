export function add(a,b){
    let sum = a + b
    return `${a} + ${b} = ${sum}`
}

export function greet(name){
    return `Hello ${name}`
}

export function evenorodd(num){
    if (num % 2 == 0){
        return `${num} is even`
    }
    else{
        return `${num} is odd`
    }
}