/**
 * callback
 */

// function getHuman(callback){
//     setTimeout(function(){ // 서버에 요청한다는 가정(응답은 2초가 걸린다.)
//         callback({
//             name : "김시원",
//             age: 44
//         })
//     }, 2000)
// }

// console.log('요청전송')
// getHuman(function(human){
//     console.log('응답완료')
//     console.log(human.name)
//     console.log(human.age)
// })

// function getHuman(callback){
//     setTimeout(function(){ // 서버에 요청한다는 가정(응답은 2초가 걸린다.)
//         callback({
//             name : "김시원",
//             age: 44
//         })
//     }, 2000)
// }

// console.log('요청전송')
// getHuman(function(human){
//     console.log('응답완료')
//     console.log(human.name)
//     console.log(human.age)
// })

// function work3(){
//     setTimeout(function(){
//         console.log("1번 끝")
//         setTimeout(function(){
//             console.log('2번 끝')
//             setTimeout(function(){
//                 console.log("3번 끝")
//             })
//         },2000)
//     },2000)
// }


/**
 * Promise
 */

// function tmp(){

// }

// // this가 안생김
// tmp = () => {

// }

// const timeoutPromise = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         resolve('완료')
//     }, 2000)
// })

// timeoutPromise.then(function(res){
//     console.log(res)    
// })

const getPromise = function(number){

    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if (number > 5){
                resolve('성공');
            } else {
                reject('실패');
            }
        }, 2000)
    })
}

// getPromise(3)
//     .then(function(res){
//         console.log(res)
//     })
//     .catch(function(err){
//         console.log(err)
//     })
//     .finally(function(){
//         console.log("끝")
//     })

Promise.all([
    getPromise(1),
    getPromise(5),
    getPromise(7)
    ])
    .then(function(res){
        console.log(res)
    })
