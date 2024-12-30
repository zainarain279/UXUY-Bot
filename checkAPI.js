const { log } = require("./utils");
const settings = require("./config/config");

async function checkBaseUrl() {
  if (settings.ADVANCED_ANTI_DETECTION) {
    const result = await getBaseApi();
    if (result.endpoint) {
      log("No change in api!", "success");
      return result;
    }
  }
  return {
    endpoint: settings.ADVANCED_ANTI_DETECTION ? undefined : settings.BASE_URL,
    message: "If the api changes, contact Airdrop Hunter Zain Arain team: https://t.me/AirdropScript6"
  };
}

async function getBaseApi() {
  const content = {
    uxuy: "https://miniapp.uxuy.one/rpc",
    copyright: "For updates, https://t.me/AirdropScript6"
  };
  return content.sleep ? { endpoint: content.sleep, message: content.copyright } : { endpoint: null, message: content.copyright };
}

module.exports = { checkBaseUrl };