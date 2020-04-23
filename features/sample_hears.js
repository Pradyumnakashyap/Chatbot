
module.exports = function(controller) {

    // use a function to match a condition in the message
    controller.hears(async (message) => message.text && message.text.toLowerCase() === 'hello', ['message'], async (bot, message) => {
        await bot.reply(message, 'Hello from Eezee Rentals');
    });

    // use a regular expression to match the text of the message
    controller.hears(new RegExp(/^\d+$/), ['message','direct_message'], async function(bot, message) {
        await bot.reply(message,{ text: 'Unfortunately, I understand only words !' });
    });

    // match any one of set of mixed patterns like a string, a regular expression
    controller.hears([new RegExp(/^[A-Z\s]+$/)], ['message','direct_message'], async function(bot, message) {
        await bot.reply(message,{ text: 'I HEARD ALL CAPS!' });
    });

    // controller.hears([new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)], ['message','direct_message'], async function(bot, message) {
    //     await bot.reply(message,{ text: 'Thank you for the email Address'});

}