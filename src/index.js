module.exports = function toReadable (number) {
    const humanNum = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven','eight', 'nine'];
    const humanNum1 = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    const humanNum2 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    const nums = [];
    do  { 
        nums.push(number%10);
        number = Math.floor(number / 10);
    } while (number > 0);
    console.log(nums);
    let result ='';
    if (nums[2]) {
        result = concat(result, humanNum[nums[2]] + ' hundred');
        if (nums[1] === 0 && nums[0] === 0) {
            return result;
        }
    }
    if (nums[1]) {
        console.log(nums[1]);
        if (nums[1]===1) {
            result = concat(result, humanNum2[nums[0]]);
            return result;
        }
        result = concat(result, humanNum1[nums[1]]);
        if (nums[0]===0) {
            return result;
        } 
    }
    if (nums[0]>=0) {
        result = concat(result, humanNum[nums[0]]);
    }
    return result;
}

function concat (a,b) {
    if (a) {
        return a + ' ' + b;
    }
    return b; 
}


