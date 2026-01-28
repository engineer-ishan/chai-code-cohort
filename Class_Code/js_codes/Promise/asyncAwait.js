async function wait(){
    console.log('start')
    await new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('5 sec tak ruka mai')
            resolve()
        },5000)
    })
    console.log('ho gaya')
}
wait()