(function solve() {
    Array.prototype.last = function(){
        return this[this.length - 1];
    }

    Array.prototype.skip = function(n){
        return this.slice(n);
    }

    Array.prototype.take = function(n){
        return this.slice(0, n);
    }

    Array.prototype.sum = function(){
        let sum = 0;
        this.forEach(num => sum += num);
        return sum;
    }

    Array.prototype.average = function(){
        return this.sum() / this.length;
    }



})();

let array = [1,2,3,4];
console.log(array.skip(3));