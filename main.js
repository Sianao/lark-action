const core = require("@actions/core");
const { Env } = require("@humanwhocodes/env");
/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
async function run() {
  try {
    const env = new Env();
    const Header =new Headers();
    var card=template
    card.elements[0].columns[0].elements[0].content="触发者："+ env.get("GITHUB_ACTOR")
    card.elements[0].columns[1].elements[0].content="触发事件："+ env.get("GITHUB_EVENT_NAME")
    card.elements[2].content="😍 CI runner ：\n "+ env.get("ACTOR")

    Header.append("Content-Type","application/json")
        const raw = JSON.stringify({
        "msg_type": "interactive",
        "card": card
        });

const requestOptions = {
  method: "POST",
  headers: Header,
  body: raw,
  redirect: "follow"
};


let hook =env.get("LARK_WEBHOOK")

  fetch("https://open.feishu.cn/open-apis/bot/v2/hook/905268a3-837b-4414-a768-c1160f9d944e", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
    const reqOption={
        method:"POST",
        head:Header,
        body:raw,
    }
  } catch (error) {
    // Fail the workflow run if an error occurs
    core.setFailed(error.message);
  }
}

module.exports = {
  run,
};

const template=
{
            "elements": [
                {
                    "tag": "column_set",
                    "flex_mode": "none",
                    "background_style": "default",
                    "horizontal_spacing": "8px",
                    "horizontal_align": "left",
                    "columns": [
                        {
                            "tag": "column",
                            "width": "weighted",
                            "vertical_align": "top",
                            "vertical_spacing": "2px",
                            "background_style": "default",
                            "elements": [
                                {
                                    "tag": "markdown",
                                    "content": "",
                                    "text_align": "left",
                                    "text_size": "normal",
                                    "icon": {
                                        "tag": "standard_icon",
                                        "token": "assigned_outlined"
                                    }
                                },
                            ],
                            "weight": 1
                        },
                        {
                            "tag": "column",
                            "width": "weighted",
                            "vertical_align": "top",
                            "vertical_spacing": "8px",
                            "background_style": "default",
                            "elements": [
                                {
                                    "tag": "markdown",
                                    "content": "**休假类型：**\n年假",
                                    "text_align": "left",
                                    "text_size": "normal",
                                    "icon": {
                                        "tag": "standard_icon",
                                        "token": "label-change_outlined"
                                    }
                                }
                            ],
                            "weight": 1
                        }
                    ],
                    "margin": "16px 0px 0px 0px"
                },
                {
                    "tag": "hr"
                },
                {
                    "tag": "markdown",
                    "content": "**备注：**\n世界这么大，我想去转转",
                    "text_align": "left",
                    "text_size": "normal",
                    "icon": {
                        "tag": "standard_icon",
                        "token": "driveload_outlined"
                    }
                },
                {
                    "tag": "column_set",
                    "flex_mode": "stretch",
                    "background_style": "default",
                    "horizontal_spacing": "8px",
                    "horizontal_align": "left",
                    "columns": [
                        {
                            "tag": "column",
                            "width": "weighted",
                            "vertical_align": "top",
                            "vertical_spacing": "8px",
                            "background_style": "default",
                            "elements": [
                                {
                                    "tag": "markdown",
                                    "content": "**备注：**\n世界这么大，我想去转转",
                                    "text_align": "left",
                                    "text_size": "normal",
                                    "icon": {
                                        "tag": "standard_icon",
                                        "token": "readinfo_outlined"
                                    }
                                }
                            ],
                            "weight": 1
                        }
                    ],
                    "margin": "16px 0px 0px 0px"
                },
                {
                    "tag": "hr"
                },
                {
                    "tag": "note",
                    "elements": [
                        {
                            "tag": "standard_icon",
                            "token": "emoji_outlined"
                        },
                        {
                            "tag": "plain_text",
                            "content": "文本内容"
                        }
                    ]
                }
            ],
            "header": {
                "title": {
                    "tag": "plain_text",
                    "content": "GITEA 事件触发"
                },
                "subtitle": {
                    "tag": "plain_text",
                    "content": ""
                },
                "template": "blue",
                "ud_icon": {
                    "tag": "standard_icon",
                    "token": "todo_colorful"
                }
            }
        }
    

