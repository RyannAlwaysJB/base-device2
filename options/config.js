/* 
NOTE : JGN HPS DIBAWAH INI!!
RECODE : RAHMXBOT X RAHMAN GNTENG:V
WHATSAPP : 085821676621
NOMOR BOT : 085821369324
NOTE : JGN HPS AUTHORNYA!!!

DONASI LAH BANG BIAR 
ADMINNYA UPDATE LAGI

Kalau Mau Donasi Silahkan Pilih Yah
Payment : Ovo/Gopay/Dana
Number Payment : Chat Owner Wa nya Di Atas
Pulsa : 081528965381
*/

const fs = require('fs')
const chalk = require('chalk')

//━━━━━━━━━━━━━━━[ WEBSITE APIKEY ]━━━━━━━━━━━━━━━━━//

global.APIs = {
liaacans: 'https://zenzapis.xyz',
}

//━━━━━━━━━━━━━━━[ APIKEY ]━━━━━━━━━━━━━━━━━//

global.APIKeys = {
'https://zenzapis.xyz': '9d30efca66',
}

//━━━━━━━━━━━━━━━[ SETTING ]━━━━━━━━━━━━━━━━━//
global.thumb = fs.readFileSync('./image/thumbnail.jpg') // JGN DI UBAH!
global.name = 'Ryan CODER ID (Owner)', // GNTI NAMA LU!
global.creator = 'Ryan Coder' // GANTI NAMA BOT LU BANH!
global.owner = ['6282252285143'] // GNTI NOMOR LU!
global.premium = ['6282252285143', '62823604965321']
 // ADD PREM YG LU MAU BANH!!
global.quotes = 'Kesempatan Anda Untuk Sukses Di Setiap Kondisi Selalu Dapat Diukur Oleh Seberapa Besar Kepercayaan Anda Pada Diri Sendiri' // Ganti Quotes, Tapi Trsrh Klian
global.pulsa = ['082350496532'] // UBAH NOMOR YG AKTIF!
global.botname = 'Created By Ryan DCoder ID' // GNTI NAMA BOT LU!
global.packname = 'METRO-BOT © 2022/2023' // TRSERAH MO GANTI AP!
global.author = 'By : Ryann\nWa : 082252285143' // GNTI NMA LU!
global.fake = 'RYAN DCoder VERIFIED' // GNTI NMA BOT LU BANH!
// FITUR TOPUP OTOMATIS 
global.hargadmff = 1261
global.hargadmml = 1700
global.merchant = 'M221206LZXP1893FR' 
global.secret = '734d13bd833a177a757dbf43000dc5c5f7c58099a12c66ba924fd5e1e14d5db2'
global.signature = '505fced95ee0a78c00371db103a10bd3'
//CARA AKTIFIN:
//1. DAFTAR DI APIGAMES.UD
//2. AMBIL MERCHANT ID DAN SECRET KEY
//3. DAFTAR DI UNIPIN
//4. HUBUNGKAN AKUN UNIPIN DENGAN APIGANES DI BAGIAN KONEKSI
//5. BUAT SIGNATURE DENGAN TOOLS ENCRYPT MD5 MERCHANTID+SECRETKEY
//6 PASANG DIATAS SITU DAN SELESAI.
global.prefa = ['','!','.','/','#','$']
global.sp = '⭔' // JGN DI UBAH²! NTR EROR
global.mess = {
success: '*[SUCCESS]* SUKSES PERMINTAAN ANDA TERKIRIM!',
admin: 'Fitur Ini Khusus Untuk Admin Group!',
botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
prem: 'Fitur Ini Khusus Untuk Premium',
owner: 'Fitur Ini Khusus Untuk Owner Bot',
group: 'Fitur Ini Digunakan Hanya Untuk Group!',
private: 'Fitur Ini Digunakan Hanya Untuk Private Chat!',
bot: 'Fitur Ini Khusus Pengguna Nomor Bot',
wait: '*[WAIT]* SEDANG DIPROSES, HARAP TUNGGU SEBENTAR!',
endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
premium: "Unlimited",
free: 20
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
