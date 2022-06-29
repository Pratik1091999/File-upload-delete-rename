const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const fs = require("fs");
const cron = require("node-cron");
const prompt = require('prompt-sync')();
const { dirname } = require("path");
const { send } = require("process");

const app = express();
console.log("Server Up");

// Upload File
// const upload = multer({
//     storage: multer.diskStorage({
//         destination: function(req, file, cb) {
//             cb(null, "uploads");
//         },
//         file: function(req, file, cb) {
//             cb(null, file.fieldname + "-" + Date.now());
//         },
//     }),
// }).single("User_file");

// app.post("/upload", upload, (req, res) => {
//     res.send("file Upload");
// });

// Delete File
// app.delete("/del/:file", (req, res) => {
//     // const filepath = __ dirname + fieldname('./uploads/' + req.params.fieldname)
//     fs.unlink("./uploads/" + req.params.file, (err) => {
//         if (err) {
//             throw err;
//         } else {
//             res.send("file delete succesfully");
//         }
//     });
// });


// Rename file
// fs.rename('./uploads/ebcf24e01da9ab2721c4331c8fbf2e61', 'newFile', (err) => {
//     if (err) {
//         throw err;
//     } else {
//         console.log('Rename complete!');
//     }
// });

// cron Job run on every sec
// cron.schedule('* * * * * *', () => {
//     console.log('running a task every sec');
// });

// cron Job run on every 1,2,4,5 min of every hour
// cron.schedule('58,59 * * * *', () => {
//     console.log('running every minute 1, 2, 4 and 5');
// });


// Api For leave appply 
var leaveDay = 4;
app.post('/leave', (req, res) => { 
    if (leaveDay > 0) {
        res.send("leave grand" + " Remaining Leave" + " " + (leaveDay - 1))
        console.log("leave grand" + " Remaining Leave" + " " + (leaveDay - 1))
    }
    else{
        res.send("Only four leave allow No Remaining Leave")
        console.log("Only four leave allow No Remaining Leave")
    }
    leaveDay--;  

    cron.schedule('0 0 1 */4 *', ()=>{
        console.log("hello")
        if(leaveDay == 0)
        leaveDay = 4;
    })
})


cron.scheduleJob(('*/4 * * * *'),() =>{
    
})





// var ch = prompt('Press 1 for leave');
// if(ch == 1){
//     var leaveDay = 4;
//     if (leaveDay > 0) {
//         console.log("leave grand" + " Remaining Leave" + " " + (leaveDay - 1))
//     }
//     else {
//         console.log("Only four leave allow No Remaining Leave")

//     }
//     leaveDay--; 
// }else{
//   console.log("Wrong input")  
// }





   









// server
var PORT = 8000;
app.listen(PORT, () => {
    console.log("Server Start at " + PORT);
})