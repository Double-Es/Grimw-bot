const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || "glitch"     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349160479137";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '3'  // put '1' to "5" here to check bot styles
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_49_12_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDU2LFxuICAgICAgICAzLFxuICAgICAgICAxMixcbiAgICAgICAgODYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjE4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTI2LFxuICAgICAgICA3OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjEyLFxuICAgICAgICAyMixcbiAgICAgICAgOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTc1LFxuICAgICAgICA1MyxcbiAgICAgICAgOCxcbiAgICAgICAgMjM1LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDY2LFxuICAgICAgICA0MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODMsXG4gICAgICAgIDEwLFxuICAgICAgICA2MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5LFxuICAgICAgICAyMixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5MCxcbiAgICAgICAgMCxcbiAgICAgICAgMjA4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTIyLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTksXG4gICAgICAgIDIzNixcbiAgICAgICAgOTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTE2LFxuICAgICAgICA5MSxcbiAgICAgICAgMjIzLFxuICAgICAgICA1NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTAxLFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTgyLFxuICAgICAgICA3NixcbiAgICAgICAgMTUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDQ3LFxuICAgICAgICA2MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEwNixcbiAgICAgICAgNjUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTYxLFxuICAgICAgICAxODQsXG4gICAgICAgIDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjExLFxuICAgICAgICA3MCxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjUwLFxuICAgICAgICA0MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjksXG4gICAgICAgIDExNixcbiAgICAgICAgMTkzLFxuICAgICAgICAyNixcbiAgICAgICAgMjExLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDgzLFxuICAgICAgICA4MyxcbiAgICAgICAgNTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTE1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDExMixcbiAgICAgICAgNTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTIzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDksXG4gICAgICAgIDMxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTgsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwLFxuICAgICAgICAxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDg5LFxuICAgICAgICA0NCxcbiAgICAgICAgODMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDc5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODQsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAzNixcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDkzLFxuICBcImFkdlNlY3JldEtleVwiOiBcImdVTy8yZGwrWklCTm5ST3RkZ2JFd0g2MGdaeTIwRXRMdXByNE92WXM3Mm89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlFic3pqSkJfUXdHaFdzaHBETFk1YlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDIzOTA5N2QtZTQyMC00NWNmLWI1OWYtMGZjMTRhNjkxNzQ5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzLFxuICAgICAgNDQsXG4gICAgICAxOTIsXG4gICAgICAxNDcsXG4gICAgICAxOTgsXG4gICAgICA5MCxcbiAgICAgIDIxMCxcbiAgICAgIDIwNixcbiAgICAgIDEyNCxcbiAgICAgIDc2LFxuICAgICAgNzQsXG4gICAgICAxOTAsXG4gICAgICAxMjAsXG4gICAgICAxMTksXG4gICAgICAyMTYsXG4gICAgICA5OSxcbiAgICAgIDE3OSxcbiAgICAgIDIzNixcbiAgICAgIDkyLFxuICAgICAgNTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTcyLFxuICAgICAgMjU1LFxuICAgICAgMjEwLFxuICAgICAgMTE4LFxuICAgICAgMTY4LFxuICAgICAgMjA0LFxuICAgICAgNTMsXG4gICAgICAxOSxcbiAgICAgIDIyMyxcbiAgICAgIDIzMCxcbiAgICAgIDE3OSxcbiAgICAgIDE1OSxcbiAgICAgIDE3NixcbiAgICAgIDI1MyxcbiAgICAgIDIwMyxcbiAgICAgIDEwLFxuICAgICAgMTU2LFxuICAgICAgMTM2LFxuICAgICAgMTA0LFxuICAgICAgMjE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkpaTkxEVlZCXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTYwNDc5MTM3OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEzODQzMjY2ODI2NDg4OjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT0NXbC93Q0VPdmx5cnNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJKT1czaFJVdm1XSGg4NUVSdWsxNkZjL2h0akxxM2hHSGV6SWt2ZjI3ejBrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlVTNzNqNG01VGRHZDhqUVpvMnpOR0lqZU1Tc01PanJ0OGF2S0RFbXFJNC9kaXpDOE5IdDFTcThXR1IxM0xmaHhSWUZMcVJyckFnaFg5VXV3aHRSSkFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInhla0lQLzZLKytyK0VkejlxMG5QRzM3MTZBU0tEb0lnL0doVy9Lcm9PSUR0NFF1NkF3dFY5M3FyZTNXT3haamw1d0ppSFdOQXNvelVIaWRtRXZCOEJ3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxNjA0NzkxMzc6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM1NTcwMTU5XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "3", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "suhail",
  packname: process.env.PACK_NAME || "tempestwbot",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Grim-X",


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
