// REMEMBER TO PSEUDOCODE
// const pad = (array, minSize, value=null) => {

// }

// find length of Array, if length is less than minsize, push the filler word (while loop)

function pad(array, minSize, value=null) {
    let answer =[...array]
    while (answer.length < minSize) {
        answer.push(value)
    }
    return answer
}
console.log(pad([1,2,3], 5))
console.log(pad([1,2,3], 5, 'apple'))