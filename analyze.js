function analyze(array) {
    let sum = array.reduce((partial_sum, a) => partial_sum + a,0); 

    
    obj = {
        
        average: sum/array.length,
        min:  Math.min(...array),
        max:  Math.max(...array),
        length: array.length

    }


    return obj
}

module.exports = analyze