const arr = [10, 20, 30, 40, 50]

const rev = () => {
    const r = []
    for (const item of arr) {
        r.unshift(item)
    }
    console.log(r)
}
rev()