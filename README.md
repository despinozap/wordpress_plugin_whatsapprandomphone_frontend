# Whatsapp random phone plugin for WordPress (frontend)
Frontend project for a WordPress plugin which requests a random whatsapp phone number (contact)

## Setup
01. Run: docker-compose build --no-cache

## Run
01. Run: docker-compose up.
02. Setup Wordpress (localhost:8080).
03. Activate WordPress plugin.
04. Into the **[WP_INSTALLATION_FOLDER]/wp-content/plugins/whatsapp-random-phone/js** create a **config.js** file with:
```
const ENDPOINT = [ENDPOINT_TO_CONTACTS_GENERATOR];
const MESSAGE = [DEFAULT_TEXT_MESSAGE];
const CIPHER_KEY = [PREDEFINED_CIPHER_KEY];
const CIPHER_IV = [PREDEFINED_CIPHER_IV];
```
**Important**: **CIPHER_KEY** must be a hex value total length 32 and **CIPHER_IV** must be a hex value total length 16. They must be the same used for encryption by the server.