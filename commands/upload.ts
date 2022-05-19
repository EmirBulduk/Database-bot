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
        message.channel.send({ embeds: [usercreate] });
        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'Tureet45'
        });

        setTimeout(function(){
            connection.connect((err: any) => {
                connection.query(`CREATE USER '${userid}'@'localhost' IDENTIFIED BY '${userid}'`, (err: any, results: any) => {
                    if (err) {
                        const hello = new MessageEmbed()
                            .setColor('RED')
                            .setTitle(" ``` User is not created ``` ")
                            .setDescription("it can be because of some error or user already exists")
                            .setTimestamp()
                        message.channel.send({ embeds: [hello] });
                    } else {
                        const hela = new MessageEmbed()
                            .setColor('#2600ff')
                            .setTitle(" ``` User is created ``` ")
                            .setTimestamp()
                        message.channel.send({ embeds: [hela] });
                    }
                });
            });
        }, 5000);
    }
}
