const fibonacci = function(n) {
    if (n < 0) return "OOPS";
    let low = 0;
    let high = 1;
    for (let i = 1; i < n; i++) {
       const temp = high;
       high = low + high;
       low = temp;
    }
    return high;
};

module.exports = fibonacci
