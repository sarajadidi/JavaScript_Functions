console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count){
    if (count == 0) {
        count = 1
    }
    if(count < 0) {
        count *= -1
    }
    
    for(let i = 1; i <= count; i++){
        if(i % 2 != 0){
            console.log(i)
        }
    }
}
printOdds(10)
printOdds(100)


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age){
    let oldEnough = `Congrats ${userName}! You can drive!`
    let tooYoung = `Sorry ${userName}, but you need to wait until you're 16.`

    if(age < 16){
        console.log(tooYoung)
    }else {
        console.log(oldEnough)
    }
}

checkAge("Sara", 20)
checkAge("Noah", 13)

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function checkQuadrant(x, y) {
    if(x > 0 && y > 0) {
        return `Quadrant 1`
    } else if (x < 0 && y > 0) {
        return `Quadrant 2`
    }else if (x < 0 && y < 0) {
        return `Quadrant 3`
    } else if(x > 0 && y < 0) {
        return `Quadrant 4`
    } else if (x == 0 && y != 0) {
        return "X Axis"
    } else if (x != 0 && y == 0) {
        return "Y Axis"
    } else {
        return "Origin"
    }
}

console.log(checkQuadrant(1, 1))
console.log(checkQuadrant(-1, 1))
console.log(checkQuadrant(1, -1))
console.log(checkQuadrant(-1, -1))
console.log(checkQuadrant(0, -11))
console.log(checkQuadrant(11, 0))
console.log(checkQuadrant(0,0))