const obj = {
    result: 4,
    sum: function (a) {
        this.result = this.result + a
        return this
    },
    subtract: function (a) {
        this.result = this.result - a
        return this
    },
    multiply: function (a) {
        this.result = this.result * a
        return this
    },
    divide: function (a) {
        this.result = this.result / a
        return this
    }
}

console.log(obj.sum(5).subtract(2).multiply(2).result)