let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Smartfrenn [0881037044211]
│ • Smartfrenn [0881037923331]
╰────

╭─「 Donasi • Non Pulsa 」
│ • GOPAY [0881037044211]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
