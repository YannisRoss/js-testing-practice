function reverseString(str) {

    let i = str.length
    let reversedString = ''
    while (i >= 0) {
        reversedString = reversedString + str.substr(i,1)
        i--
    }

    return reversedString

} 

module.exports = reverseString