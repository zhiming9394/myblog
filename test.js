async function async1(){
    await async2()
    console.log(111111)
}

async function async2(){
    console.log(222222)
}

async1()

setTimeout(()=>{
    console.log(333333)
})

new Promise( resolve =>{
    console.log(444444)
    resolve()
}).then( ()=>{console.log(5555555)}).then( ()=>{console.log(6666666)})