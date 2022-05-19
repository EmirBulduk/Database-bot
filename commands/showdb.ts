var mysql = require("mysql");
import {

    MessageEmbed,
    Message,
    Channel,

} from 'discord.js';

export default {
    callback: (message: Message, ...args: string[]) => {

        const userid = message.author.id;

        const usercreate = new MessageEmbed()
            .setColor('#2600ff')
            .setTitle(" ``` PLEASE WAIT CREATING USER ``` ")
            .setTimestamp()
        message.channel.send({embeds: [usercreate]});
        const connection = mysql.createConnection({
            host: 'localhost',
            user: userid,
            password: userid,
            database: 'mydb'
        });
        //show files that is registered in the database
        connection.connect();
        connection.query('SELECT * FROM users', function (error, results, fields) {
            if (error) throw error;
            console.log(results);
            const user = new MessageEmbed()
                .setColor('#2600ff')
                .setTitle(" ``` USER DATABASE ``` ")
                .setTimestamp()
                .setDescription(results)
            message.channel.send({embeds: [user]});
        });


