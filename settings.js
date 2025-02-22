const fs = require('fs');
const chalk = require('chalk');

global.ytname = 'YouTube: @pythonzulx' // Nama YouTube Kamu
global.socialm = 'GitHub: ZulX88' // Nama GitHub Kamu
global.location = '11 Naitōmachi, Shinjuku City, Tokyo 160-0014, Jepang' // Lokasi Kamu

global.botName = 'Mora AI' // Nama Bot Kamu
global.ownerNumber = '601164899724' // Nomor Kamu
global.ownerName = 'Ahmadio Carlos' // Nama Kamu
global.website = 'https://zulxapi.vercel.app' // Web Kamu
global.wagc = 'https://zulxapi.vercel.app' // Web Kamu
global.packname = 'Mora AI' // Nama Pack
global.author = 'K.R X Ahmad' // Nama Author
global.creator = '601164899724@s.whatsapp.net' // Nomor Creator
global.premium = ['628812722419', '6283119115977', '6288213993436'] // User Premium
global.hituet = 0 // Hit Command
global.prefa = '.'; // Prefix
global.tempatDB = 'database.json'; // Tempat Database

global.saluran = '120363363009408737@newsletter' // ID Saluran Kamu
global.saluranName = 'Mora AI' // Nama Saluran Kamu
global.sessionName = 'session' // Nama Folder Sesi Bot Kamu

global.panel = 'https://domainlu.my.id'; // Link Panel Kamu
global.cred = 'ptla_klUmglK7fADLZ5Br8jOwSh65IDeWAYRZuI6iQ1BIj'; // API PTLA Kamu
global.apiuser = 'ptlc_QTOmFi0ZDh0QBE5LtwCkBzSFWPZTIpz901lNybolo'; // API PTLC Kamu
global.eggs = '15', // Eggs Number (Recommended)
global.nets = '5', // Nets Number (Recommended)
global.location = '1', // Location Number (Recommended)

global.typereply = 'v4' // Gaya Reply v1-v4
global.autoblocknumber = '62' // Auto Block Number
global.antiforeignnumber = '62' // Anti Foreign Number
global.welcome = false // Auto Welcome Msg
global.anticall = false // Anti Call
global.autoswview = false// Auto View Status
global.adminevent = false // Admin Event Msg
global.groupevent = false // Group Event Msg
global.autoClearSesi = true // Otomatis hapus file sesi setiap 1 jam
global.autoClearTmp = false // Otomatis hapus file temp setiap 1 jam
global.customPair = true //Custom pair code
if (customPair) {
    global.pairCode = "ZULXMARI" //Pair codenya
};

global.limit = {
	free: 30, // Limit User Non-premium
	premium: 9999, // Limit User Premium
	vip: 'VIP' // Limit User VIP 👑
};

global.uang = {
	free: 10000, // Uang User Non-premium
	premium: 1000000, // Uang User Premium
	vip: 10000000 // Uang User VIP 👑
};

global.bot = {
	limit: 0, // Limit Awal Bot
	uang: 0 // Uang Awal Bot
};

global.game = {
	suit: {}, // Sesi Game Suit
	menfes: {}, // Sesi Menfess
	tictactoe: {}, // Sesi Tictactoe
	kuismath: {}, // Sesi Kuis Mathematics
	tebakbom: {}, // Sesi Tebak Bom
};

global.mess = {
	admin: 'Fitur ini khusus buat admin aja ya, Kak! 🫢',
	botAdmin: 'Mora harus jadi admin dulu biar bisa jalanin ini! 😭',
	done: 'Done Kak! ✨',
	error: 'Eh, ada yang salah nih... coba lagi ya, Kak! 😖',
	group: 'Eits, fitur ini cuma bisa dipakai di grup~ 🫡',
	limit: 'Yah, limit penggunaan Kakak udah habis... 😢\n\nCoba ketik .buy untuk membeli dan menambah limit ✨',
	noCmd: 'Hmm... perintahnya gak ada di daftar Mora nih. Coba cek lagi ya, Kak! 🤔',
	nsfw: 'Fitur NSFW dimatikan di grup ini, coba minta izin ke admin dulu ya~ 🫣',
	owner: 'Hanya pemilik yang bisa akses fitur ini, Kak! 👑',
	premium: 'Fitur ini cuma buat pengguna premium, Kak! 🌟',
	private: 'Fitur ini cuma bisa dipakai di chat pribadi, Kak! 💌',
	success: 'Yeay, berhasil! 🎉',
	wait: 'Tunggu sebentar ya, Kak... Mora lagi proses nih! ⏳🤗'
};

global.thumb = fs.readFileSync('./media/icon.png'); // Buffer Image
global.thumbUrl = 'https://i.ibb.co.com/p2nKgqP/image.png'; // Url Image

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})