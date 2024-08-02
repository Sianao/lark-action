const core = require("@actions/core");
const { Env } = require("@humanwhocodes/env");
/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
async function run() {
  try {
    const Header =new Headers();
    const raw =JSON.stringify({
        "msg_type":"text",
        "context":{
            "text":"新更新提醒"
        }
    })
    const reqOption={
        method:"POST",
        head:Header,
        body:raw,
    }
    const env = new Env();
    let hook =env.get("LARK_WEBHOOK")
    fetch(hook,
         requestOptions)
         .then((response) => response.text())   
         .then((result) => console.log(result))   
         .catch((error) => console.error(error));

  } catch (error) {
    // Fail the workflow run if an error occurs
    core.setFailed(error.message);
  }
}

module.exports = {
  run,
};
