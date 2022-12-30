const fs=require('fs');


var __timezoneoffset=6;
let date_ob=new Date();let date=("0" + date_ob.getDate()).slice(-2);let month=("0" + (date_ob.getMonth() + 1)).slice(-2);let year=date_ob.getFullYear();let hours=date_ob.getHours()-__timezoneoffset;let minutes=date_ob.getMinutes();let seconds=date_ob.getSeconds();
function DandT(){return "["+year+"-"+month+"-"+date+"*"+hours+"."+minutes+"."+seconds+"]"} 

const logger = {
  "trace":function(e){try{fs.appendFileSync('./log/log.html',`<br><b style="color:#00ee00;background-color:#000000;font-family:monospace;">`+DandT()+`[trace]>>>`+e+`</b>\n`);}catch(e){};console.log('\x1b[32m'+e+'\x1b[0m');},//trace
  "debug":function(e){try{fs.appendFileSync('./log/log.html',`<br><b style="color:#0022ff;background-color:#000000;font-family:monospace;">`+DandT()+`[debug]>>>`+e+`</b>\n`);}catch(e){};console.log('\x1b[36m'+e+'\x1b[0m');},//debug
  "info":function(e){try{fs.appendFileSync('./log/log.html',`<br><b style="color:#ffffff;background-color:#000000;font-family:monospace;">`+DandT()+`[info]>>>`+e+`</b>\n`);}catch(e){};console.log('\x1b[97m'+e+'\x1b[0m');},//info
  "warn":function(e){try{fs.appendFileSync('./log/log.html',`<br><b style="color:#ff9900;background-color:#000000;font-family:monospace;">`+DandT()+`[WARN]>>>`+e+`</b>\n`);}catch(e){};console.log('\x1b[33m'+e+'\x1b[0m');},//warn
  "error":function(e){try{fs.appendFileSync('./log/log.html',`<br><b style="color:#ad6e00;background-color:#000000;font-family:monospace;">`+DandT()+`[ERROR]>>>`+e+`</b>\n`);}catch(e){};console.log('\x1b[93m'+e+'\x1b[0m');},//error
  "fatal":function(e){try{fs.appendFileSync('./log/log.html',`<br><b style="color:#ff0000;background-color:#000000;font-family:monospace;">`+DandT()+`[FATAL]>>>`+e+`</b>\n`);}catch(e){};console.log('\x1b[31m'+e+'\x1b[0m');},//fatal
};


// log tester
logger.trace("Entering cheese testing");
logger.debug("Got cheese.");
logger.info("Cheese is Comté.");
logger.warn("Cheese is quite smelly.");
logger.error("Cheese is too ripe!");
logger.fatal("Cheese was breeding ground for listeria.");