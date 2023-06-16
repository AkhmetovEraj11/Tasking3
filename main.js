// Task1
function sum(a){
    return function(b = a){
        return b + b;
    }
}

result1 = sum(5)
result2 = result1(5)
result3 = sum(5)(10)

function zarb(a){
    return function(b = a){
        return b * b;
    }
}

result1 = zarb(5)
result2 = result1(5)
result3 = zarb(5)(10)

console.log(result3)

let double2 = createMultiplierSum(2)
let result2 = double(5)
let result2 = double(5)

// Task 3
function NewFunc(a){
    return function(b = a){
        return b + b;
    }
}

result1 = NewFunc(5)
result2 = result1(5)
result3 = NewFunc(5)(10)

console.log(result3)
// Task 4
function sum(a){
    return function(b = a){
        return b + b;
    }
}

// Task 5
function pass(a){
  let main = "SoftClub"
    return function(b = a){
        if (a == main){
          return true
        }
        else{
          return false
        }
    }
}



