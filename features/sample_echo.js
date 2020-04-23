

module.exports = function(controller) {

    controller.hears('hi','message,direct_message', async(bot, message) => {
        await bot.reply(message, 'Hello I am your Eezee Assistant, How can i help you?');
    });

    controller.on('message,direct_message', async(bot, message) => {
        await bot.reply(message, `Echo: ${ message.text }`);
    });

}
