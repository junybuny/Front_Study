/**
 * Loops
 * 
 * 1) for
 * 2) while
 */

// 1~10까지 출력
for(let i = 1; i < 11; i ++) {
    console.log(i);
}

// 5~15까지 모든 수의 합을 구해라
let sum = 0;
for(let i = 5; i < 16; i++) {
    sum += i;
    console.log(sum);
}

// 1단부터 9단까지 구구단 출력
for(let i = 1; i < 10; i++) {
    for(let j = 1; j < 10; j ++) {
        console.log(i + '*' + j + '=' + i * j);
    }
    console.log();
}

/**
 * for .. in
 */

const human = {
    name : 'jun',
    age : 24,
    gender : '여자'
}

for (let key in human) {
    console.log(human[key]);
    console.log(key + " : " + human[key]);
}

/**
 * for .. of
 */

human = ['jun', 'sumin', 'jiwon']

for (let value of human) {
    console.log(value);
}

/**
 * while
 */

let number = 0;

while (number < 11) {
    console.log(number);
    number++;
}

/**
 * do .. while
 */

number = 0;

do {
    console.log(number);
    number++;
} while (number < 11)

/**
 * break
 * continue
 */

number = 0;
while (number < 11) {
    if (number % 2 === 0) {
        number++;
        continue;
    }
    console.log(number);
    number++;
}