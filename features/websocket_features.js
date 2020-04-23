
module.exports = function(controller) {

    if (controller.adapter.name === 'Web Adapter') {

        console.log('Loading web features...');

        controller.hears(new RegExp('quick'), 'message', async (bot, message) => {

            await bot.reply(message,{
                text: 'Here are some quick solutions',
                quick_replies: [
                    {
                        title: 'Provide Email',
                        payload: 'Thank you for your email',
                    },
                    {
                        title: 'Provide Business Name',
                        payload: 'Thank you for the information',
                    }
                ]
            });
        });


    }

}