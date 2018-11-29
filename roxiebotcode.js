const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {

    console.log('I am ready!');

});


client.on('message', message => { // This is where we will handle all message events. Aka, the commands that will trigger the bot.

	if(message.content.toLowerCase() === 'hello')
		message.reply("Hello there. Did the room get hotter or is it just me" + "?");

	else if(message.content.toLowerCase() === 'xo')
		message.reply("Can I borrow a kiss? I swear Ill give one back " + "!");

else if(message.content.toLowerCase() === 'baby')
		message.reply("Ill be your baby anyday my love" + "!");

else if(message.content.toLowerCase() === 'queen')
		message.reply("Can I straddle your throne" + "?");

else if(message.content.toLowerCase() === 'hey there')
		message.reply("You are constantly in my thoughts, and surely you have occupied a place in my heart" + "!");

else if(message.content.toLowerCase() === 'heart')
		message.reply("Come live in my heart. It’s rent free" + "!");

else if(message.content.toLowerCase() === 'nsfw')
		message.reply("A girl loves it when you can work your tongue" + "!");

else if(message.content.toLowerCase() === 'tongue')
		message.reply("Care to show a live demonstration xoxo" + "?");

else if(message.content.toLowerCase() === 'mommy')
		message.reply("aye yes papi mmm" + "!");

else if(message.content.toLowerCase() === 'cum')
		message.reply("can I have yours" + "?");

else if(message.content.toLowerCase() === 'love')
		message.reply("oh mi amour" + "!");

else if(message.content.toLowerCase() === 'roxie')
		message.channel.send("Im Miss Roxxxie, Im here to please and keep you company, baby. Im sure well get along just right ;).");


});

client.login(process.env.NTE3NDg1MTYyMjcxOTk3OTUz.DuDAMA.9Dh6lI4WRwIgBjMrpIsgaeuxCNc);