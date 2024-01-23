const arr = ["dell", "hp", "apple"]

const find = arg => {
    // let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arg) {
            return true
        }
    }
    return false
}

console.log(find("msi"))
console.log(find("dell"))

