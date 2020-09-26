const axio = require('axios')
const cheerio = require("cheerio");
exports.run = async (client, message, args) => {
    try {
        if (!message.channel.nsfw) return message.channel.send("This channel is not nsfw")

        let url;
        let location;
        let tagtext = "";
        let titletext = "";
        let artisttext = "";

        console.log(args)
        if (args === '') {
            url = "https://nhentai.net/random";
        }
        else {
            url = "https://nhentai.net/g/" + args;
        }

        console.log(url)
        const htmlDoc = await cheerio.load(axio.get(url));

        console.log(htmlDoc.name)
    }
    catch (error){
    throw error;
    }

};