import sjcl from 'sjcl';

const SECRET_KEY = 'your-secret-key';

export const encryptId = (id) => {
  try {
    const encrypted = sjcl.encrypt(SECRET_KEY, id);
    console.log("Encrypted ID---", encrypted);
    return encrypted;
  } catch (e) {
    console.error("Encryption error:", e);
    return null;
  }
};

export const decryptId = (cipherText) => {
  try {
    const decrypted = sjcl.decrypt(SECRET_KEY, cipherText);
    console.log("Decrypted ID---", decrypted);
    return decrypted;
  } catch (e) {
    console.error("Decryption error:", e);
    return null;
  }
};
