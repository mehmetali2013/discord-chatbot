const Discord = require('discord.js')
const client = new Discord.Client()
const config = require("./config.json")


client.on('ready', () => console.log('Bot online'))


const chatcord = require('chatcord')
const chat = new chatcord.Client()

client.on('message', (message) => {
  if(message.author.bot || message.channel.type == 'dm') return
  if(message.channel.id != config.channel) return
  message.channel.startTyping()
  chat.chat(message.content).then(reply => {
    message.channel.stopTyping()
    message.channel.send(reply)
  })
})

client.login(config.token)
