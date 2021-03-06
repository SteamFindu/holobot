exports.run = (client, message, args) => {
    // requires the ADMININSTRATOR permission to use
    if (!message.member.hasPermission("ADMINISTRATOR")) {
        return message.reply("You do not have permission to use this command")
    }

    if(!args || args.length < 1) return message.reply("Need command which to reload");
    const commandName = args[0];
    // Check if the command exists and is valid
    if(!client.commands.has(commandName)) {
        return message.reply("That command does not exist");
    }
    // the path is relative to the *current folder*, so just ./filename.js
    delete require.cache[require.resolve(`./${commandName}.js`)];
    // We also need to delete and reload the command from the client.commands Enmap
    client.commands.delete(commandName);
    const props = require(`./${commandName}.js`);
    client.commands.set(commandName, props);
    message.reply(`The command ${commandName} has been reloaded`);
};