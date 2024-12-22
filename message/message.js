module.exports = async (senderNumber, prefix, command, setReply) => {
    global.mess = {
        wait: '*`𝙿𝚁𝙾𝙲𝙴𝚂𝚂𝙸𝙽𝙶 𝙰 𝚂𝙴𝙲....`*',
        nsfw: '*`𝙽𝚂𝙵𝚆 𝙸𝚂 𝙿𝚁𝙾𝙷𝙸𝙱𝙸𝚃𝙴𝙳 𝙸𝙽 𝚃𝙷𝙸𝚂 𝙶𝚁𝙾𝚄𝙿`*',
        success: '`𝚂𝚄𝙲𝙲𝙴𝚂𝚂𝙵𝚄𝙻`',
        limit: `[❕] Your limit has run out\nIf you want unlimited limit, you can buy premium, for only 10 thousand you can buy unlimited limit for 3 months,\nPlease type ${prefix}owner to find out.`,
        only: {
            prem: '`𝚃𝙷𝙸𝚂 𝙵𝙴𝙰𝚃𝚄𝚁𝙴 𝙸𝚂 𝙾𝙽𝙻𝚈 𝙵𝙾𝚁 𝙿𝚁𝙴𝙼𝙸𝚄𝙼 𝚄𝚂𝙴𝚁𝚂`',
            group: '`𝚃𝙷𝙸𝚂 𝙵𝙴𝙰𝚃𝚄𝚁𝙴 𝙲𝙰𝙽 𝙾𝙽𝙻𝚈 𝙱𝙴 𝙰𝙲𝙲𝙴𝚂𝚂𝙴𝙳 𝙸𝙽 𝙶𝚁𝙾𝚄𝙿`',
            private: '`𝚃𝙷𝙸𝚂 𝙵𝙴𝙰𝚃𝚄𝚁𝙴 𝙲𝙰𝙽 𝙾𝙽𝙻𝚈 𝙱𝙴 𝙰𝙲𝙲𝙴𝚂𝚂𝙴𝙳 𝙸𝙽 𝙿𝚁𝙸𝚅𝙰𝚃𝙴 𝙲𝙷𝙰𝚃`',
            ownerB: '`𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙵𝙾𝚁 𝙱𝙾𝚃 𝚄𝚂𝙴𝚁𝚂 𝙾𝙽𝙻𝚈 `',
            owner: '`𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙵𝙾𝚁 𝙱𝙾𝚃 𝚄𝚂𝙴𝚁𝚂 𝙾𝙽𝙻𝚈`',
            admin: '`𝚃𝙷𝙸𝚂 𝙵𝙴𝙰𝚃𝚄𝚁𝙴 𝙲𝙰𝙽 𝙾𝙽𝙻𝚈 𝙱𝙴 𝙰𝙲𝙲𝙴𝚂𝚂𝙴𝙳 𝙱𝚈 𝙰𝙳𝙼𝙸𝙽𝚂 !!!`',
            reseller: '`𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙲𝙰𝙽 𝙾𝙽𝙻𝚈 𝙱𝙴 𝚄𝚂𝙴𝙳 𝙱𝚈 𝚁𝙴𝙶𝙸𝚂𝚃𝙴𝚁𝙴𝙳 𝚁𝙴𝚂𝙴𝙻𝙻𝙴𝚁𝚂`',
            Badmin: '`𝙼𝙰𝙺𝙴 𝙱𝙾𝚃 𝙰𝙳𝙼𝙸𝙽 𝚃𝙾 𝙱𝙴 𝙰𝙱𝙻𝙴 𝚃𝙾 𝚄𝚂𝙴 𝚃𝙷𝙸𝚂 𝙱𝙾𝚃`'
        }
    };

    const fs = require("fs");
    const chalk = require("chalk");

    // Watch for file changes and reload if updated
    const file = require.resolve(__filename);
    fs.watchFile(file, () => {
        fs.unwatchFile(file);
        console.log(chalk.redBright(`Reloading file: ${__filename}`));
        delete require.cache[file];
        require(file);
    });
};