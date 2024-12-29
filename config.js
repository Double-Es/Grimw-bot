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


global.SESSION_ID = process.env.SESSION_ID  "SUHAIL_22_01_12_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxOCxcbiAgICAgICAgMjMyLFxuICAgICAgICA5MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMyxcbiAgICAgICAgMjE5LFxuICAgICAgICA0MixcbiAgICAgICAgMTA5LFxuICAgICAgICAxODMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTQxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjIxLFxuICAgICAgICA5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDQ5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDExLFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjMsXG4gICAgICAgIDg3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTUzLFxuICAgICAgICA5NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjUzLFxuICAgICAgICA5MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDQwLFxuICAgICAgICA1MixcbiAgICAgICAgMzYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODIsXG4gICAgICAgIDMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTM0LFxuICAgICAgICA3MixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMixcbiAgICAgICAgMTkxLFxuICAgICAgICA2MixcbiAgICAgICAgMTI1LFxuICAgICAgICA5MixcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjEzLFxuICAgICAgICA1MixcbiAgICAgICAgMzksXG4gICAgICAgIDUsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExMixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTIyLFxuICAgICAgICAxODIsXG4gICAgICAgIDU4LFxuICAgICAgICAzNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjM2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTAxLFxuICAgICAgICA2NixcbiAgICAgICAgNTEsXG4gICAgICAgIDU3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICA5NixcbiAgICAgICAgNTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDY5LFxuICAgICAgICA1OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDksXG4gICAgICAgIDE2NixcbiAgICAgICAgMzgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDgyLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMixcbiAgICAgICAgMTc0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTE5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE2LFxuICAgICAgICA3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDU5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNixcbiAgICAgICAgNDIsXG4gICAgICAgIDgzLFxuICAgICAgICAyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ3LFxuICAgICAgICA5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDQxLFxuICAgICAgICAzMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjksXG4gICAgICAgIDg3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTI2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDM5LFxuICAgICAgICAzMixcbiAgICAgICAgMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTExLFxuICAgICAgICAyMjksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjA5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTYyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTUzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDQ4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDI4LFxuICAgICAgICA2OSxcbiAgICAgICAgNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDI5LFxuICAgICAgICA2MSxcbiAgICAgICAgODcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMixcbiAgICAgICAgMixcbiAgICAgICAgMTMzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTk1LFxuICAgICAgICA2OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI2N0pYcVgrVXhZUnVEcmZPR2g4WFJRVDVMWURlZC8xRTRPU0VkVmx3VU44PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI0SEVXUjBzZ1NjNjFFQXR0R3I0VXV3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ0MGYxMGViLTVmMzctNDdhMi04YWQ5LThlZGRlNjMzMTg0ZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDMsXG4gICAgICAyMDAsXG4gICAgICAxNDMsXG4gICAgICAyMTYsXG4gICAgICA5OSxcbiAgICAgIDE4MSxcbiAgICAgIDMwLFxuICAgICAgMjE4LFxuICAgICAgMzEsXG4gICAgICAyMDQsXG4gICAgICAxNTQsXG4gICAgICA5MyxcbiAgICAgIDIxMixcbiAgICAgIDQ1LFxuICAgICAgMjI1LFxuICAgICAgMTA5LFxuICAgICAgOTYsXG4gICAgICAxNTksXG4gICAgICAxNjYsXG4gICAgICAyMzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA3LFxuICAgICAgNTUsXG4gICAgICAxODIsXG4gICAgICAxNTAsXG4gICAgICA3MSxcbiAgICAgIDE5LFxuICAgICAgOCxcbiAgICAgIDExOCxcbiAgICAgIDExMixcbiAgICAgIDEyMixcbiAgICAgIDE1NyxcbiAgICAgIDE1MixcbiAgICAgIDE5OSxcbiAgICAgIDIzMCxcbiAgICAgIDE4MCxcbiAgICAgIDI0OCxcbiAgICAgIDQ5LFxuICAgICAgODgsXG4gICAgICA3LFxuICAgICAgMjIwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlhEOVJaNEoyXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTM2NzAzNzk0OjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI0NjQ3NjE1OTg4MTM1NzoxMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLQ0R6OXdIRUppTng3c0dHQW9nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkttRG5LdlA1dk5Ub2NvN3FJMkhPT2FWYVVQVEpRV1VZK2M2RVB5eWVCRFE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZmRGc1ZUN1FiL2IzWnNkMXZXelZNQ3V1cUduTlovVUMrcTR4dnV0UEhOYVlhaVdtakMrbXZtamgzY1BlWVhaZFhYdnZ5M0ZNT2tORVdzSmtRQ3RoQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUFdHVDVrZi9FekYyei9DZWJuMVFuajVMV1hMdlVLK2IyVHhYUnIzYk1FSUlPN2RIeTNWTG9McnFiNjRLTHowRGxZSFhDdVVRTnZGTjBIRW5GZHhGQUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEzNjcwMzc5NDoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTUwOTY2MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVSOFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRVI4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiR0d1R1BSOVEyVGlPa0kvcUtVZW5RRktPaHhhenpoa0RoR2ZZcHNIa015MD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDczMjgwOTI4LFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCwxLDIsNF19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9" // PUT your SESSION_ID 


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
