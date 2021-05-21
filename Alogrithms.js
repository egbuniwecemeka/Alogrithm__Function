/* 
= Assignment operator
=== and !== comparison operators
=== comparison operator EQUAL TO 
> greater than
< less than 
<= less than or equal to 
>= greater than or equal
*/

/* CONDITIONALS
if (condition){
    'Set of code to run if condition is true'
NB: When a variable is called, it refers to its value.
Otherwise else condition is displayed.
}*/
//QUESTION 1
var a = 115
var b = "String"
let i = a || b
if (i === Number(a)) {
    var convertFahrToCelsius = ((a || b) - 32) * 5 / 9
    console.log(convertFahrToCelsius.toFixed(4))
} else {
    console.log(i + ' ' + 'is not a valid number but a/an' + " " + typeof(i.valueOf(a | b)))
}

//QUESTION 2
/*var n = 10
var Arr = []
checkYuGiOh = (Arr === n); {
    let Arr = Array.from({ length: n }, (_, index) => index + 1);
    console.log(Arr)
}
let IsPrime = (checkYuGiOh) => {
    for (let i = 2; i <= n / 2; i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true

}*/

/*

const isPrime = (n) => {
    for (let i = 2; i <= n / 2; i++) {
        if (n % i === 0) {
            return false;
        }
    };
    return true;
};
const generatePrime = num => {
    {
        var arr = [];
        let i = 2;
        while (arr.length < num) {
            if (isPrime(i)) {
                if ((i === 2)) {
                    return arr[i] = 'oh'
                } else {

                }
            }
        };
        i = i === 2 ? i + 1 : i + 2;
    };
    return arr
};
console.log(generatePrime(6));
console.log(generatePrime(16));
console.log(generatePrime(36));*/
/*Simple Approach 

is to traverse over every value of ‘k’ in whole array and count total multiples by checking modulas of every element of array i.e., for every element of i (0 < i < n), check whether arr[i] % k == 0 or not. If it’s perfectly divisible of k, then increment count. Time complexity of this approach is O(n * k) which is not efficient for large number of queries of k.

Efficient approach

is to use the concept of Sieve of Eratosthenes. Let’s define the maximum value in array[] is ‘Max’. Since multiples of all numbers in array[] will always be less than Max, therefore we will iterate up-to ‘Max’ only. 
Now for every value(say ‘q’) iterate q, 2q, 3q, … t.k(tk <= MAX) because all these numbers are multiples of ‘q‘ .Meanwhile store the count of all these number for every value of q(1, 2, … MAX) in ans[] array. After that we can answer every query in O(1) time.*/

// Javascript program to calculate all multiples
// of integer 'k' in array[]

// ans is global array so that both
// countSieve() and countMultiples()
// can access it.


/*
let ans = []
let arr = [2, 3, 4, 5, 6, 7, 8, 9, 18]
let n = [20]

// Function to pre-calculate all
// multiples of array elements
checkYuGiOh = (arr, n) => {
    let MAX = arr[0];
    for (let i = 1; i < n; i++)
        MAX = Math.max(arr[i], MAX)
    let cnt = Array.from({ length: MAX + 1 }, (_, i) => 0)
        // ans is global array so that
        // query function can access it.
    ans = Array.from({ length: MAX + 1 }, (_, i) => 0)

    // Store the arr[] elements as
    // index in cnt[] array
    for (let i = 0; i < n; ++i)
        ++cnt[arr[i]];
    // Iterate over all multiples as 'i'
    // and keep the count of array[]
    // (In cnt[] array) elements in ans[]
    // array
    for (let i = 1; i <= MAX; ++i)
        for (let j = i; j <= MAX; j += i)
            ans[i] += cnt[j];
    return
}
let Prime = (arr, n) => {

}
console.log(ans.Prime())


function countMultiples(k) {
    // return pre-calculated result
    return ans[k]
}
// driver function

// pre-calculate all multiples
checkYuGiOh(arr, n)

k = 3;
console.log(ans)

k = 5;
document.write(countMultiples(k) + "<br/>");*/


function checkYuGiOh(n) {
    if (n >= 1) {
        var prime_num1 = [],
            prime_num2 = [];
        for (var i = 0; i <= n; i++) {
            prime_num2.push(true);
        }
        for (var i = 2; i <= n; i++) {
            if (prime_num2[i]) {
                prime_num1.push(i);
                for (var j = 1; i * j <= n; j++) {
                    prime_num2[i * j] = false;
                }
                console.log(`${n} is a prime number`);
            }
        }
        return prime_num1;
    } else {
        console.log(`${n} is a not prime number`)
    }
}
console.log(checkYuGiOh(40))