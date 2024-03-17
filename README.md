# AFS attack

Redirection of sensitive form data to a remote server.

## Installation

Make sure you start npm ```npm init```.
After that, install express ```npm install -g express``` and the express body-parser ```npm install express body-parser```.

Also install the free ngrok and get your token. https://ngrok.com

## Use

To use, start the terminal at ```/src``` and start running the server with ```node server.js```.
After that open another terminal and start ngrok on the same server port ```ngrok http 8000```.

Take the web link that ngrok provides "Forwarding", and place it inside the variable ```const redirect_data``` in ```AFS.js```.

Finally, copy the contents of ```AFS.js``` and paste it into the target site's devtools console.

## Legal Disclaimer

This repository contains code primarily focused on JavaScript DOM manipulation for educational or knowledge purposes. The author disclaims any responsibility for misuse, including for malicious or illegal activities. Users are advised to adhere to all applicable laws and regulations when using the code. The author shall not be liable for any damages arising from the use or misuse of the code. This repository is intended solely for educational and research purposes, and any unlawful activities are strictly prohibited.
