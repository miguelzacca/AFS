# AFS

Redirection of sensitive form data to a remote server. Self-XSS attack

## Installation

To install the necessary dependencies, run the following command
```npm
npm install
```
You will also need to register with ngrok and configure your token. https://ngrok.com

## Use

Start the server that will receive the information
```npm
npm run server
```
After that, in another terminal start ngrok
```npm
npm run ngrok
```

Take the web link that ngrok provides <span translate="no">"Forwarding"</span>, and place it inside the variable ```const redirect_data``` in ```AFS.js```.
Finally, copy the contents of ```AFS.js``` and paste it into the target site's devtools console on any PC.

## Disclaimer


This repository contains code primarily focused on DOM manipulation with Javascript for educational or knowledge purposes. The author disclaims any responsibility for misuse and will not be responsible for any damages arising from the use or misuse of the code. This repository is intended solely for educational and research purposes, and any illegal activities are strictly prohibited.
