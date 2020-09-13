const moment = require("moment")
const fs = require("fs")
const path = require("path")

class serverLoger {
  constructor(config) {
    if (!config) {
      this.writeToLogFile = true
      this.path = path.join(__dirname, "..", "..", "..", "server.log") || path.join(__dirname, "server.log")
    } else {
      this.writeToLogFile = !config.writeToLogFile ? false : true
      if (this.writeToLogFile) {
        this.path = filePath || path.join(__dirname, "..", "server.log")
      }
    }
  }

  log(text) {
    try {
      if (this.writeToLogFile) {
        const logStream = fs.createWriteStream(this.path, {flags: "a"})
        logStream.write(`[${moment().format("HH:mm:ss | DD.MM.YY")}] ${text} \n`)
        logStream.end()
      }
      console.log(`[${moment().format("HH:mm:ss | DD.MM.YY")}] ${text}`)
      return
    } catch (e) {
      console.error(e)
      return
    }
  }
}

module.exports = {
  serverLoger,
}
