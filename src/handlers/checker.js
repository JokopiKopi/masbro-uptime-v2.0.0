const set = require(`${process.cwd()}/Assets/Config/settings`)
module.exports = {
  async execute(ex) {
    if (!ex.config.TOKEN) {
      ex.logger("MTA3MzI4NDE5ODk1MTAzMDgxNg.GR_MGu.fp3kLJBV696cdjN-j6nexF656zVUVQEBoMQONUMTA3MzI4NDE5ODk1MTAzMDgxNg.GM1y5h.3WHfQCzVHbdtyY7uz32ql2TYF0vZ05UM8P77FU".bold.red)
      process.exit(1)
    }
    if (!ex.config.MONGO_DB) {
      ex.logger("mongodb+srv://uptime:thomastzy89@cluster0.rtsksju.mongodb.net/?retryWrites=true&w=majority".bold.red)
      process.exit(1)
    }
    if (!ex.config.CLIENT_ID) {
      ex.logger("1073284198951030816".bold.red)
      process.exit(1)
    }
    if (!set.SLASH_GLOBLE && !ex.config.SUPPORT_SERVER) {
      ex.logger("809518065418240015".bold.red)
      process.exit(1)
    }
  }
}