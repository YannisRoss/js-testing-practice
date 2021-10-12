function cipher(str, positions) {

    let i = 0;
    let cipheredString = ''

    while (i < str.length) {
        char = str.substr(i,1)

        let stringNum = char.charCodeAt(0)
        if (".,?!/".includes(char)) {

            stringNum = stringNum - positions
        }

        else if (char == char.toUpperCase()){
            if (stringNum + positions > 90) {

                stringNum = stringNum - 26
            }
        }

        
        else {

            if (stringNum + positions > 122) {

            stringNum = stringNum - 26
        }}
        
        cipheredString = cipheredString + String.fromCharCode(positions+stringNum)
        i++
    }
    
    return cipheredString
}

module.exports = cipher