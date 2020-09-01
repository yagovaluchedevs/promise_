const n = new Promise((resolve, reject) => {
    let a = 3 + 3;

    if (a == 6) {
        resolve('Sucesso')
    } else {
        reject('Failed')
    }
})

n.then((message) => {
    console.log(message)
}).catch((error) => {
    console.log(error)
})