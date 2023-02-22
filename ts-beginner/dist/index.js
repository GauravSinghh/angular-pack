"use strict";
function calculateWeight(weight) {
    if (typeof weight === 'number') {
        return weight * 2;
    }
    else {
        return parseInt(weight) * 3;
    }
}
console.log(calculateWeight(10));
console.log(calculateWeight('40kg'));
//# sourceMappingURL=index.js.map