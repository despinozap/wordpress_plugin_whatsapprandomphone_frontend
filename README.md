# Whatsapp random phone plugin for WordPress (frontend)
Frontend project for a WordPress plugin which requests a random whatsapp phone number (contact)

## Setup
01. Run: **docker-compose build --no-cache**

## Run
01. Run: **docker-compose up**.
02. Setup Wordpress [http://localhost:8080](http://localhost:8080).
03. Activate WordPress plugin.
04. Into the **[WP_INSTALLATION_FOLDER]/wp-content/plugins/whatsapp-random-phone/js** create a **config.js** file with:
```
const CONFIG = {
  endpoint: [REQUEST_ENDPOINT],
  cipher: {
    key: [CIPHER_KEY],
    iv: [CIPHER_IV]
  },
  messages: {
    // To show in confirmation
    confirm: "Would you like to talk?",
    // To send on chat opening
    text: "Hello, I would like more information",
    // To show on requesting
    requesting: 'Requesting contact..',
    // To show when error in request
    request_error: 'Fail on getting contact.'
  }
};
```
**Important**: **[CIPHER_KEY]** must be a hex value total length 32 and **[CIPHER_IV]** must be a hex value total length 16. They must be the same used for encryption by the server.