const fs = require('fs').promises;

class Logger {
    static _instance = null;
    static _logFile = null;

    static async getInstance() {
        if (Logger._instance === null) {
            Logger._instance = new Logger();
            Logger._logFile = await Logger._openLogFile();
        }
        return Logger._instance;
    }

    static async _openLogFile() {
        return await fs.open('app.log', 'a');
    }

    async log(message) {
        if (Logger._logFile) {
            await Logger._logFile.write(message + '\n');
        } else {
            console.error('Log file is not open');
        }
    }
}

// Usage
(async () => {
    const logger1 = await Logger.getInstance();
    const logger2 = await Logger.getInstance();

    await logger1.log("This is the first log message.");
    await logger2.log("This is the second log message.");

    console.log(logger1 === logger2); 
})();
