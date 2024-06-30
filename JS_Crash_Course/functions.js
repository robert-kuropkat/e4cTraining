
//
//  Functions
//
console.log('\nFunctions...');

// Oldschool

function ApplyDiscount_f(price) {
    return price * .75;
}

console.log(`\tOld school function (25% discount)\t: ${ApplyDiscount_f(100)}`);

// 'Arrow' function

const ApplyDiscount_af = (price) => { return price *.80; }

console.log(`\tArrow function (20% discount)\t\t: ${ApplyDiscount_af(100)}`);
