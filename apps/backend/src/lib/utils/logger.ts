import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

const logger = winston.createLogger({
	level: "info",
	format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
	transports: [
		// new winston.transports.File({ filename: "logs/error.log", level: "error" }),
		// new winston.transports.File({ filename: "logs/combined.log" }),
		new DailyRotateFile({
			filename: "logs/%DATE%.log",
			datePattern: "YYYY-MM-DD",
			zippedArchive: true,
			maxSize: "20m",
			maxFiles: "7d",
		}),
	],
});

if (process.env.NODE_ENV !== "production") {
	logger.add(
		new winston.transports.Console({
			format: winston.format.json(),
		})
	);
}

export default logger;
