const core = require("@actions/core");
const { Env } = require("@humanwhocodes/env");
/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
async function run() {
  try {
    const Header =new Headers();
    Header.append("Content-Type","application/json")
        const raw = JSON.stringify({
        "msg_type": "interactive",
        "card": template
        });

const requestOptions = {
  method: "POST",
  headers: Header,
  body: raw,
  redirect: "follow"
};

const env = new Env();
let hook =env.get("LARK_WEBHOOK")

  fetch(hook, requestOptions)
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


const template= JSON.parse(
    {
        "name":"Github action",
        "dsl":{
           "config":{
              
           },
           "i18n_elements":{
              "zh_cn":[
                 {
                    "tag":"column_set",
                    "flex_mode":"none",
                    "background_style":"default",
                    "horizontal_spacing":"8px",
                    "horizontal_align":"left",
                    "columns":[
                       {
                          "tag":"column",
                          "width":"weighted",
                          "vertical_align":"top",
                          "vertical_spacing":"2px",
                          "background_style":"default",
                          "elements":[
                             {
                                "tag":"markdown",
                                "content":"**申请人：**",
                                "text_align":"left",
                                "text_size":"normal",
                                "icon":{
                                   "tag":"standard_icon",
                                   "token":"assigned_outlined"
                                }
                             },
                             {
                                "tag":"column_set",
                                "flex_mode":"none",
                                "background_style":"default",
                                "horizontal_spacing":"8px",
                                "horizontal_align":"left",
                                "columns":[
                                   {
                                      "tag":"column",
                                      "width":"18px",
                                      "vertical_align":"top",
                                      "vertical_spacing":"8px",
                                      "background_style":"default",
                                      "elements":[
                                         
                                      ]
                                   },
                                   {
                                      "tag":"column",
                                      "width":"weighted",
                                      "vertical_align":"top",
                                      "vertical_spacing":"8px",
                                      "background_style":"default",
                                      "elements":[
                                         {
                                            "tag":"person_list",
                                            "persons":[
                                               {
                                                  "id":"39af6166"
                                               }
                                            ],
                                            "size":"small",
                                            "show_avatar":true,
                                            "show_name":true
                                         }
                                      ],
                                      "weight":1
                                   }
                                ],
                                "margin":"0px 0px 0px 0px"
                             }
                          ],
                          "weight":1
                       },
                       {
                          "tag":"column",
                          "width":"weighted",
                          "vertical_align":"top",
                          "vertical_spacing":"8px",
                          "background_style":"default",
                          "elements":[
                             {
                                "tag":"markdown",
                                "content":"**休假类型：**\n年假",
                                "text_align":"left",
                                "text_size":"normal",
                                "icon":{
                                   "tag":"standard_icon",
                                   "token":"label-change_outlined"
                                }
                             }
                          ],
                          "weight":1
                       }
                    ],
                    "margin":"16px 0px 0px 0px"
                 },
                 {
                    "tag":"column_set",
                    "flex_mode":"stretch",
                    "background_style":"default",
                    "horizontal_spacing":"8px",
                    "horizontal_align":"left",
                    "columns":[
                       {
                          "tag":"column",
                          "width":"weighted",
                          "vertical_align":"top",
                          "vertical_spacing":"8px",
                          "background_style":"default",
                          "elements":[
                             {
                                "tag":"markdown",
                                "content":"**时间：**\n2024-3-11 至 2024-3-15 （共 5 天）",
                                "text_align":"left",
                                "text_size":"normal",
                                "icon":{
                                   "tag":"standard_icon",
                                   "token":"time_outlined"
                                }
                             }
                          ],
                          "weight":1
                       },
                       {
                          "tag":"column",
                          "width":"weighted",
                          "vertical_align":"top",
                          "vertical_spacing":"8px",
                          "background_style":"default",
                          "elements":[
                             {
                                "tag":"markdown",
                                "content":"**备注：**\n世界这么大，我想去转转",
                                "text_align":"left",
                                "text_size":"normal",
                                "icon":{
                                   "tag":"standard_icon",
                                   "token":"readinfo_outlined"
                                }
                             }
                          ],
                          "weight":1
                       }
                    ],
                    "margin":"16px 0px 0px 0px"
                 },
                 {
                    "tag":"hr"
                 },
                 {
                    "tag":"action",
                    "actions":[
                       {
                          "tag":"button",
                          "text":{
                             "tag":"plain_text",
                             "content":"按xi钮"
                          },
                          "type":"danger_filled",
                          "complex_interaction":true,
                          "width":"fill",
                          "size":"medium",
                          "icon":{
                             "tag":"standard_icon",
                             "token":"apaas_colorful"
                          },
                          "multi_url":{
                             "url":"baidu.,com",
                             "pc_url":"",
                             "ios_url":"",
                             "android_url":""
                          }
                       }
                    ]
                 }
              ]
           },
           "i18n_header":{
              "zh_cn":{
                 "title":{
                    "tag":"plain_text",
                    "content":"GIT推送事件 "
                 },
                 "subtitle":{
                    "tag":"plain_text",
                    "content":""
                 },
                 "template":"blue",
                 "ud_icon":{
                    "tag":"standard_icon",
                    "token":"todo_colorful"
                 }
              }
           }
        },
        "variables":[
           
        ]
     }
)