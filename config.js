const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://tempest123:tempest123@cluster0.02siv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://tempest123:tempest123@cluster0.02siv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '2'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_57_12_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTc1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1MixcbiAgICAgICAgOTAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjE5LFxuICAgICAgICA2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzksXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOCxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDYyLFxuICAgICAgICAxODksXG4gICAgICAgIDEwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDcxLFxuICAgICAgICA1MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDg0LFxuICAgICAgICA3MCxcbiAgICAgICAgNzksXG4gICAgICAgIDI0MixcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDg0LFxuICAgICAgICAyNixcbiAgICAgICAgNTAsXG4gICAgICAgIDc4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTk4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNixcbiAgICAgICAgMzMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjE1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjA5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTc4LFxuICAgICAgICA2NCxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjE2LFxuICAgICAgICA2MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTA4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAzMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDMsXG4gICAgICAgIDksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjE3LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjAxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzksXG4gICAgICAgIDcwLFxuICAgICAgICA4MixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDMyLFxuICAgICAgICA4NixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDExLFxuICAgICAgICA0NCxcbiAgICAgICAgMTI5LFxuICAgICAgICA4NixcbiAgICAgICAgMTQxLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTksXG4gICAgICAgIDY3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDU4LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTEwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTksXG4gICAgICAgIDk4LFxuICAgICAgICA4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTksXG4gICAgICAgIDE3NyxcbiAgICAgICAgODYsXG4gICAgICAgIDcxLFxuICAgICAgICAyOSxcbiAgICAgICAgODAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDkwLFxuICAgICAgICA4NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODYsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTksXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDY4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTM3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjUzLFxuICAgICAgICA1OSxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTMyLFxuICAgICAgICA1MSxcbiAgICAgICAgMjA1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRnllR1g5eGNIMVVCU1BHYW41cTN5REFYWnNpcTE5amFhMktGRjZKbkFQdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTM2NzAzNzk0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxQTQ5QkYyREZFQzU0NTFBOEFDRTA0ODgxMzU3NEU3RVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzU0ODc4MjNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwic19Kck9aNEZRUi1FMWlNdUVKNEVkd1wiLFxuICBcInBob25lSWRcIjogXCIyMTBkNDJlYS1iYmMzLTRjNGQtYjc5MC00NmJhNDMxNGU3ZGZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjAsXG4gICAgICA2MCxcbiAgICAgIDI1MSxcbiAgICAgIDIzNyxcbiAgICAgIDk3LFxuICAgICAgNDcsXG4gICAgICAxNzEsXG4gICAgICAzLFxuICAgICAgMjA2LFxuICAgICAgMjgsXG4gICAgICA0NCxcbiAgICAgIDE0MCxcbiAgICAgIDIwNixcbiAgICAgIDE3NyxcbiAgICAgIDgzLFxuICAgICAgMjA4LFxuICAgICAgNTQsXG4gICAgICA0MyxcbiAgICAgIDMzLFxuICAgICAgNTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM2LFxuICAgICAgMTYyLFxuICAgICAgMzcsXG4gICAgICAxNDcsXG4gICAgICAxNSxcbiAgICAgIDIzNyxcbiAgICAgIDIyMixcbiAgICAgIDUyLFxuICAgICAgMjIsXG4gICAgICAxODgsXG4gICAgICAyMzcsXG4gICAgICAyNCxcbiAgICAgIDIwMyxcbiAgICAgIDIwNyxcbiAgICAgIDIwNCxcbiAgICAgIDcsXG4gICAgICA4NCxcbiAgICAgIDI0MyxcbiAgICAgIDM3LFxuICAgICAgNDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiR1ZTMkRDMVBcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMzY3MDM3OTQ6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNDY0NzYxNTk4ODEzNTc6OEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJEcmFrZW5cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLQ0R6OXdIRU1maXhic0dHQWdnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkttRG5LdlA1dk5Ub2NvN3FJMkhPT2FWYVVQVEpRV1VZK2M2RVB5eWVCRFE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUHlZMlJJTzFKdndGWTZwcEdWS1o0WGhaUVkvcjdoS2lBN3FYZlRhVDFMOHRXOHg0ZFJ4STYxTUdaNWNDUUlqd2pYSVI2NVNTeVFFRUxXU1JVcEpaQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwia0crNVpDZHowMURxT3REUlZLUFRVRFJBazdKeWxCdzVramUrRzU1Sk9adzZRb20wekRjbzBMUWs4VTlYeC9pbmF2Vy9nTEtTQjVWL1pDbzR3WWsvQnc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEzNjcwMzc5NDo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA1MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM1NDg3ODIwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRVI4XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFUjguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJHR3VHUFI5UTJUaU9rSS9xS1VlblFGS09oeGF6emhrRGhHZllwc0hrTXkwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwNzMyODA5MjgsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMiw0XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "3", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "suhail",
  packname: process.env.PACK_NAME || "tempestwbot",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Tempest-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
