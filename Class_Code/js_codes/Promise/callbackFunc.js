const fs = require("fs");
const fsv2 = require("fs/promises");

// fs.readFile('./Class_Code/js_codes/Promise/file.txt', "utf-8", function (err, data){
//     if(err)
//         console.error("there is error reading file")
//     else{
//         console.log(data)
//         fs.writeFile('./Class_Code/js_codes/Promise/backup.txt', data, (err)=>{
//             if(err)
//                 console.log('error writing the backup', err)
//             else{
//                 fs.unlink('./Class_Code/js_codes/Promise/file.txt', function(e){
//                     if(e)
//                         console.log(`error deleting file`)
//                     else
//                         console.log('done')
//                 })
//             }
//         })
//     }
// })

fsv2.readFile("./Class_Code/js_codes/Promise/file.txt", "utf-8")
    .then((data) =>
        fsv2.writeFile("./Class_Code/js_codes/Promise/backup.txt", data),
    )
    .then(() => fsv2.unlink("./Class_Code/js_codes/Promise/file.txt"))
    .then(() => console.log("sucessfully copied and deleted the file"))
    .catch((e) => console.log("Error", e));
