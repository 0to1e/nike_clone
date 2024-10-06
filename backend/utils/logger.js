// backend/utils/logger.js

import winston from 'winston';

// const customFormat = winston.format.printf(({ level, message, timestamp }) => {
//     return `{
//     "timestamp": "${timestamp}",
//     "level": "${level}",
//     "message": "${message}"
// }`;
// });

const logger = winston.createLogger({
    level: 'info',
    // format: winston.format.combine(
    //     winston.format.timestamp(),
    //     customFormat
    // ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'error.log', level: 'error', 
            // format: customFormat
         }),
    ],
});

export default logger;
