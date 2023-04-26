const winston = require("winston");

const logger = winston.createLogger({
    level: "error",
    format: winston.format.json(),
    defaultMeta: { service: "user-service" },
    transports: [
        new winston.transports.File({ filename: "error.log", level: "error" }),
    ],
});

function error_personalizado(){
    throw new Error("Error Personalizado");
}

try {
    error_personalizado();    
} catch (e) {
    logger.log("error", e.toString());
}