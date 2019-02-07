# NPM-SLACK-MESSENGER
With this package you can send message to slack channel easily, see te example:

```
var SlackMessenger = require("npm-slack-messenger"),
    slackMessenger = SlackMessenger({
      slackChannel: "GasdasdCM9gfasas07VEaasdadaD",
      slackBotName: "Deploy Bot",
      slackToken: "xoxp-aass11"
    });
    
slackMessenger
      .sendMessage("I sended one message to my Slack Channel")
      .then(function (value) { console.log(value) })
      .catch(function (reason) { console.log(reason) });
```
