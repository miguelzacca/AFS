# AFS attack

AFS, paste the contents of ```AFS.js``` into the devtools console on the target website.

## Installation

Certifique-se de iniciar o npm ```npm init```.
After that, install express ```npm install -g express``` and the express body-parser ```npm install express body-parser```.

Also install the free ngrok and get your token.

## Use

To use, start the terminal at ```/src``` and start running the server with ```node server.js```.
After that open another terminal and start ngrok on the same server port ```ngrok http 8000```.

Take the web link that ngrok provides "Forwarding", and place it inside the variable ```const redirect_data``` in ```AFS.js```.

Finally, copy the contents of ```AFS.js``` and paste it into the target site's devtools console.