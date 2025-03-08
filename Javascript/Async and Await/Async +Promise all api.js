let p = () => {
   return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Not acceptable"))
        }, 3000)
    })
}

let a = async () => {
    try {
        let c = await p()  //c used to store promise cheat..the promise token ..if no error this run
        console.log(c)
        console.log("No erro")
    } catch (error) {
        console.log("Error handled"+error)
    }
}

a()  //call





let p1 = async () => {
    return new Promise((resolve, reject) => {
            setTimeout(() => {
                    resolve(10)
            }, 2000)
    })
}
let p2 = async () => {
    return new Promise((resolve, reject) => {
            setTimeout(() => {
                    resolve(20)
            }, 1000)
    })
}
let p3 = async () => {
    return new Promise((resolve, reject) => {
            setTimeout(() => {
                    resolve(30)
            }, 3000)
    })
}
//all exec result after 3 seconds only
const run = async () => {
    console.time("run")
    // let a1 = await p1() // Fetch first 10 products from the database
    // let a2 = await p2() // Fetch another 10 products from the database
    // let a3 = await p3() // Fetch yet another 10 products from the database


    let a1 = p1() // Fetch first 10 products from the database
    let a2 = p2() // Fetch another 10 products from the database
    let a3 = p3() // Fetch yet another 10 products from the database
    let a1a2a3 = await Promise.all([a1, a2, a3])
    console.log(a1a2a3)
    // console.log(a1, a2, a3)
    console.timeEnd("run")
}

run()


/*
Notice that the timer's name is displayed when the timer value is logged using console.timeLog() and again when it's stopped. 
In addition, the call to console.timeEnd() has the additional information, 
"timer ended" to make it obvious that the timer is no longer tracking time.
*/
