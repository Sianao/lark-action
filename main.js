const core = require("@actions/core");
/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
async function run() {
  try {
    const state = core.getInput("state", { required: true });
    // Debug logs are only output if the `ACTIONS_STEP_DEBUG` secret is true
    core.debug(`Run with ${state}`);
  } catch (error) {
    // Fail the workflow run if an error occurs
    core.setFailed(error.message);
  }
}

module.exports = {
  run,
};
