var axios = require("axios");

module.exports = function (config) {
    return {
        sendMessage: function (message) {
            return new Promise(function (resolve, reject) {
                if (config.slackChannel && config.slackBotName && config.slackToken) {
                    axios.post("https://slack.com/api/chat.postMessage",
                        {
                            text: message,
                            channel: config.slackChannel,
                            username : config.slackBotName,
                        },
                        {
                            headers: {"Authorization": "Bearer " + config.slackToken}
                        }
                    ).then(function (data) {
                        if (data.data.ok) {
                            resolve({
                                status: true,
                                message: "Message sent!",
                                stack: {}
                            });
                        } else {
                            reject({
                                status: false,
                                message: "Message not sent :(",
                                stack: data.data.error
                            });
                        }
                    }).catch(function (error) {
                        reject({
                            status: false,
                            message: "Message not sent :(",
                            stack: error
                        });
                    });
                } else {
                    reject({
                        status: false,
                        message: "Message not sent :(",
                        stack: 'Please send me your configs example: {slackChannel: "123", slackBotName: "Deploy Bot", slackToken: "xoxp-123"}'
                    });
                }
            })
        }
    }
}
