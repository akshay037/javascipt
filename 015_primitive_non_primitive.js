const str = "dell"
// str = "hp"

const arr = [100]   // 100 is stored in address form
arr[0] = 500
console.log(arr)

const obj = {
    name: "ddd"
}
obj.name = "kate"
console.log(obj)

//------------------------------------------------------------------------------------------------------------------------------------------

function test(){
    console.log("test function")
    return "hello"
}

test()
const result = test
result()

function demo(x){
    x()
}
demo(test)  //callback

//------------------------------------------------------------------------------------------------------------------------------------------

/*
    Task 1
    const arr3 = [10, 20, 30, 40, 50]

    expected
    [10, 40, 30, 20, 50]

*/

const arr3 = [10, 20, 30, 40, 50, 60, 70, 80]

function swap(i){
    
    // temp = arr3[1]
    // arr3[1] = arr3[3]
    // arr3[3] = temp

    temp = arr3[i - 1]
    arr3[i - 1] = arr3[i + 1]
    arr3[i + 1] = temp

}
swap(2)
console.log(arr3)

//------------------------------------------------------------------------------------------------------------------------------------------

/*
    Task 2
    const task2 = [10, 20, 30, 40, 50]

    expected
    [10, 40, 30, 20, 50]
    right sum is larger than left sum
*/

// ceil() floor()

const task2 = [10, 20, 30, 40, 50]
const center = Math.floor(task2.length / 2)
console.log(center)
let lsum = 0, rsum = 0
for (let i = 0; i <= center; i++) {
    console.log(task2[i])
    lsum += task2[i]
}
for (let i = center +1 ; i <task2.length; i++) {
    console.log(task2[i])
    rsum += task2[i]
}
console.log(lsum)
console.log(rsum)
console.log(lsum > rsum ? lsum : rsum)  // > = grater ?= then := otherwise


const x = 10
let y = x
y = 20
console.log(x)

