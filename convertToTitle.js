/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    let dict = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    let res = ''

    while (n !== 0) {
        n--
        let c = n % 26
        res = dict[c] + res
        n = parseInt(n / 26)
    }

    return res
    
};
let n = 5200
console.log(convertToTitle(n))
