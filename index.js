const fs = require('fs');

const TelegramAPI = require('node-telegram-bot-api');
const token = '6239792921:AAFuYckdSF-YLWRuVs_1ULuWJY5Vwmod8Sw';
const bot = new TelegramAPI(token, {polling: true});

const start = () => {
    bot.setMyCommands([
        {command: '/start', description: 'Начальное приветствие'}
    ])
    
    bot.on('message', async msg => {
        console.log(msg);
    
        const chatId = msg.chat.id;
        const text = msg.text;
    
        if (text === '/start') {
            return bot.sendMessage(chatId, 'Перешлите сообщения из бота для добавления статистики.')
        }

        return bot.sendMessage(chatId, 'Команда не распознана');
    })
}

start();