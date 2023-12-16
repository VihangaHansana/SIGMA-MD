const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════,[Make sure you put all values in "" , '']\\
global.owner = process.env.OWNER_NUMBER || '94782303652' ; // Add Your Number without +
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Maher-Zubair:SIGMA-MD@zubi.9g6b16y.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp" ; // put mongodb key here
global.port=5000  ;
global.audio = '' ; 
global.video = '' ;
global.blockJids = process.env.BLOCK_JID ||'120363169665426586@g.us' ;
global.allowJids = process.env.ALLOW_JID ||'120363169665426586@g.us' ;
global.email = 'vihangahansana2580@gmail.com' ; 
global.github = 'https://github.com/Maher-Zubair/SIGMA-MD' ;
global.location = 'galle srilanka' ;
global.timezone  = process.env.TIME_ZONE || 'Asia/colombo' //add correct timezone or leave it same , otherwise you get erros
global.gurl = 'https://www.youtube.com/@InnoxentTech?sub_confirmation=1' ; 
global.sudo =  process.env.SUDO || "923466319114" ; // Do not change it
global.devs = "923466319114"; //Dont change it From here
global.mztit = process.env.MZTIT ||"ㅤＶＩＰｘＮＩＫＩㅤヤ", // add your title here
global.Gname = process.env.GNAME ||"sɪɢᴍᴀ ᴹᴰ-sᴜᴘᴘᴏʀᴛ",
global.zyt = process.env.ZYT || 'https://www.youtube.com/@InnoxentTech?sub_confirmation=1',
global.waUrl = process.env.WAURL ||"https://chat.whatsapp.com/CmY0THcJCUYEGxLJulhcRV",
global.website = 'http://lnkiy.in/SIGMA-MD-WEB' ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/03e49e6e2057568db8926.jpg' ;
module.exports = {
  sessionName: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEtFSXgrWGFjcEF2MzJBaS9rQnE4NThVc1FkV3JWSWNGa1RqVm0za3BVaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieGNiMEVZYXMxQVovNDZqbzRsN3ZrNFV6clpaekVya0V1dzRIM0hwTUYyRT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzS0VodnF6QzlRTnBVUWk5TXdac1lHUDZCbHFOVGdITnEwTTIwTEF0OTJJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwY1BTUmdLOXlVUWVlZXBTRkM5d0RjbWtySUhzNEtEeWdyZkFZbzF2R0VJPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVQRmMyU1NvVkl6bHlpNTNpTFk1V1FPOVJJM25NMHFnZGtBWW43SnNZMG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9VbElFbVVVNWNqa2NqWGxqU3ovQ3FPUXMycTV0amFHOG55b0Zyd3ZxSGM9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQcGIxUjlBelFSa0dSd3VaWnpuUWI1MU1ZdFFzL0RUR0xXUWxqUnRFTXNTVnFUTm1OSlhsd1QvQ2E3dDNhQUFtOEFCYWsycjBEbzBOY044aHhacU1EQT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE2MiwiYWR2U2VjcmV0S2V5IjoiMURzNG1wV2U5YVIrOEp5bTY3UWRxNVpRMzMxRTBjY2hyZkdvN0pYSzZRMD0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiTzhyVlpQbkdSdEtuUHJUXzU4eUo0ZyIsInBob25lSWQiOiJmMTgzOTAxMS1lNGMwLTRmMzYtYjkyZi0wMDIwMjk1YTkyMGMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMVNqTGM3WkdnUDBSUHRMK3JSR2J2M0ZldDJNPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIYktzQ2RINFI5RWEyQXpqQnVoRzFHcDZ5YTg9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNLcU0zYVFHRU5IKzlxc0dHQUk9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InUyU0RPV1FHSmpqdDZzV05kdmNHZDhYMXFxMzNHTVBPSlJnVmxwMVdtamM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkcxVXNHNE0yU2J0R2xuUFlMekRGcUtSdXJPTVE5MEdreEpyTmhkSTIxQkRqYWtxN2dvRmZMZlB3WEh4bm55K2FSV0Jqb3hzZEJjSmd2bnR6Y3VlNUFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI0S09Rb3FYUDV1TVlyVVZRWWxCL0I0bnFYck11RjJwa2hQeE9tR053bGRxV0IzbTRYOEtaOVV0MHh3VFdMeG5yQmRMQUhLTnY1QyswT2ZCSFEweHBBdz09In0sIm1lIjp7ImlkIjoiOTQ3ODIzMDM2NTI6MzRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4Zew4ZaHLuGRjklLSSDwn6SNIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzgyMzAzNjUyOjM0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJ0a2d6bGtCaVk0N2VyRmpYYjNCbmZGOWFxdDl4akR6aVVZRlphZFZwbzMifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MDI3Mzk3OTcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRXFHIn0=',      //Put Your Session Id Here
  botname: process.env.BOT_NAME || 'ㅤＶＩＰｘＮＩＫＩㅤヤ',  // add the botname you want
  ownername:  process.env.OWNER_NAME || `ꪜ𝓲ꫝꪖꪀᧁꪖ ꫝꪖꪀ𝘴ꪖꪀꪖ 😇😇`, // add your name
  author:  process.env.PACK_AUTHER || 'ꪜ𝓲ꫝꪖꪀᧁꪖ ꫝꪖꪀ𝘴ꪖꪀꪖ 😇😇', 
  auto_read_status : process.env.AUTO_READ_STATUS || 'false', // if it true it automatically views status and send status in your inbox
  packname:  process.env.PACK_NAME || "ꪜ𝓲ꫝꪖꪀᧁꪖ ꫝꪖꪀ𝘴ꪖꪀꪖ 😇😇" , 
  autoreaction: process.env.AUTO_REACTION || 'true', // if it true it will react to all messages
  antibadword : process.env.ANTI_BAD_WORD || 'nobadwordokey',
  alwaysonline: process.env.ALWAYS_ONLINE || 'true', // it will show always online, false it if you dont want
  antifake :   process.env.FAKE_COUNTRY_CODE ||'212',
  readmessage: process.env.READ_MESSAGE || 'false', // it will read all your messages, false it if you dont want
  HANDLERS: process.env.PREFIX || '.',
  warncount : process.env.WARN_COUNT || 2,
  disablepm: process.env.DISABLE_PM || "false", // if true it will disable your pm
  MsgsInLog:process.env.MSGS_IN_LOG ||'false',
  pmMsgsInLog:process.env.PM_MSGS_IN_LOGS ||'false',
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'true', 
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.BRANCH || 'remove',
  BRANCH: process.env.BRANCH || 'Main',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
  HEROKU_API_KEY: process.env.HEROKU_API_KEY,
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "34wcCGPoe3yaGtpiBZgx4SN7", // add your remove bg key if you have it
  caption :process.env.CAPTION || "\t*ㅤＶＩＰｘＮＩＫＩㅤヤ* ",   //*『sᴜʙsᴄʀɪʙᴇ • ɪɴɴᴏxᴇɴᴛ ᴛᴇᴄʜ』https://www.youtube.com/@InnoxentTech,
  promote_demote_messages : process.env.PROMOTE_DEMOTE_MESSAGES || 'true' ,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY ||'' , // add your openai key if you have it
  VERSION: process.env.VERSION || '𝚅.𝟷.𝟸.𝟽',
  LANG: process.env.THEME|| 'SIGMA_MD',
  menu : process.env.MENU || '', // Not Available in current Version
  WORKTYPE: process.env.WORKTYPE || 'public' // if private only you can use your bot, if public everyone use your bot
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
