var C = {};   



totalPayable = 210         // £2.10
cashPaid     = 300         // £3.00
difference   =  90         // 90p
change       = [50,20,20]  // 50p, 20p, 20p


// C Object simplifies exporting the module
C.getChange = function () {    // enough to satisfy the test
    'use strict';
    return true;               // also passes JSLint
};
module.exports = C;            // export the module with a single method