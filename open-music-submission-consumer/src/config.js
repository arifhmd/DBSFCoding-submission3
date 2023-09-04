const dotenv = require('dotenv');

dotenv.config();

const config = {
  mailer: {
    smtpHost : process.env.MAIL_HOST,
    smtpPort : Number(process.env.MAIL_PORT),
    smtpUser : process.env.MAIL_ADDRESS,
    smtpPass : process.env.MAIL_PASSWORD,
  },
  rabbitmq: {
    url: process.env.RABBITMQ_SERVER,
  },
  postgres: {
    host: process.env.DBHOST,
    port: process.env.DBPORT,
    database: process.env.DBNAME,
    username: process.env.DBUSER,
    password: process.env.DBPASSWORD,
  },
}

module.exports = config;
