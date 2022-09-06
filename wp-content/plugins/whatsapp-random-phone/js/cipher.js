// Load from config file
const KEY = CONFIG.cipher.key;
const IV = CONFIG.cipher.iv;

// Encrypt text to cipheredtext(hex)
const encrypt = (text) => {
  // Encoding
  var key = CryptoJS.enc.Utf8.parse(KEY);
  var iv = CryptoJS.enc.Utf8.parse(IV);

  // Encrypt
  var cipheredText = CryptoJS.AES.encrypt(text, key, {
    iv: iv
  });

  const result = cipheredText.ciphertext.toString();

  return result;
};

// Decrypt cipheredtext(hex) to text
const decrypt = (ciphertextHex) => {
  // Encoding
  var key = CryptoJS.enc.Utf8.parse(KEY);
  var iv = CryptoJS.enc.Utf8.parse(IV);

  // Decrypt
  var decipheredText = CryptoJS.AES.decrypt(
    {
      ciphertext: CryptoJS.enc.Hex.parse(ciphertextHex)
      // salt: ""
    },
    key,
    {
      iv: iv
    }
  );

  const result = decipheredText
    .toString()
    .match(/../g) // Separe by pairs (hex value)
    .reduce((carry, hexValue) => {
      // Add ASCII value of Hex to the result string
      return carry + String.fromCharCode(parseInt(hexValue, 16));
    }, "");

  return result;
};