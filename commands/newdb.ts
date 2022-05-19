var mysql = require("mysql");
import {
    
  MessageEmbed,
  Message,
  Channel,

} from 'discord.js';


export default {
  callback: (message: Message, ...args: string[]) => {

    const userid = message.author.id;

    const dbcreate = new MessageEmbed()
        .setColor('#2600ff')
        .setTitle(" ``` Creation in progress ``` ")
        .setDescription("Go to your Dms to set name of the database")
        .setTimestamp()
        message.channel.send({ embeds: [dbcreate] }); 

    const dbname = new MessageEmbed()
        .setColor('#2600ff')
        .setTitle(" ``` Enter Database Name ``` ")
        .setDescription("text here only the database name without prefix You Have 15seconds to enter the name")
        .setTimestamp()
        message.author.send({ embeds: [dbname] });
      //get the name of the database from dms and create it
        message.author.send("Enter the name of the database");
        const filter = (m: Message) => m.author.id === message.author.id;
        const genderCollector = message.channel.createMessageCollector({filter, time: 15000, max: 1});
        genderCollector.on('collect' , (message: Message) => {
            //dbname variable is the gendercollector.collect(message);  
            const dbname = message.content;
            const connection = mysql.createConnection({
                host: 'localhost',
                user: 'root',
                password: 'Tureet45',
            });
            connection.connect((err: any) => {
                connection.query(`CREATE DATABASE ${dbname}`, (err: any, results: any) => {
                    if (err) {
                        const keriz = new MessageEmbed()
                            .setColor('RED')
                            .setTitle(" ``` Database is not created ``` ")
                            .setDescription("it can be because of some error or database already exists")
                            .setTimestamp()
                        message.author.send({ embeds: [keriz] });
                    } else {
                        const helal = new MessageEmbed()
                            .setColor('#2600ff')
                            .setTitle(" ``` Database is created ``` ")
                            .setTimestamp()
                        message.author.send({ embeds: [helal] });
                    }
                }
                );
            }
            );
        }
        );

  }
}
