let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • 085779150501
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
