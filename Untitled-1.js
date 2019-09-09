/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    
    if(s.length == 1){
        return 0
    }else if(s.length > 1 ){
        let a = s.split("")
        let aLen = a.length
        let res = 0
        for(let i = 0;i < aLen ;i++){
            let m = a[i]
            for(let c = 0;c < aLen ;c++){
                if(m == a[c]){
                    res = c
                    // return res
                }else{
                    res = -1
                }
            }
           
        }
        console.log(res)
      
    }
};
firstUniqChar("bac")
// console.log()