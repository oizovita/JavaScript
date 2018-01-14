const ENG_LETTERS = 26;

var alphabet = 'abcdefghijklmnopqrstuvwxyz'
var stringArray = ''
var cipher = [];
var stringArray = prompt("Enter string", "");
var key = prompt("Enter key", "");
var selector = prompt("Enter selector", "");
var strLen = stringArray.length;

userChoise(selector, stringArray, key)

function encrypt(key, stringArray) {
    for (var i = 0; i <= strLen; i++) {

        if ((stringArray.charCodeAt(i) >= alphabet.charCodeAt(0)) && (stringArray.charCodeAt(i) <= alphabet.charCodeAt(25))) {
            cipher[i] = stringArray.charCodeAt(i) + (key % ENG_LETTERS);
            temp = cipher[i];
            cipher[i] = String.fromCharCode(cipher[i])

            if (temp > alphabet.charCodeAt(25)) {
                cipher[i] = alphabet.charCodeAt(0) + (temp - alphabet.charCodeAt(25)) - 1;
                cipher[i] = String.fromCharCode(cipher[i]);
            }
        }
    }
}

function decrypt(key, stringArray) {
    for (var i = 0; i <= strLen; i++) {

        if ((stringArray.charCodeAt(i) >= alphabet.charCodeAt(0)) && (stringArray.charCodeAt(i) <= alphabet.charCodeAt(25))) {
            cipher[i] = stringArray.charCodeAt(i) - (key % ENG_LETTERS);
            temp = cipher[i];
            cipher[i] = String.fromCharCode(cipher[i])

            if (temp < alphabet.charCodeAt(0)) {
                cipher[i] = alphabet.charCodeAt(0) + (temp - alphabet.charCodeAt(25)) - 1;
                cipher[i] = String.fromCharCode(cipher[i]);
            }
        }
    }
}

function userChoise(selector, stringArray, key) {
    const ENCRYPT = 1;
    const DECRYPT = 2;

    if (selector == ENCRYPT) {
        encrypt(key, stringArray)
       
        var string = cipher.join('');
        alert(string);
        document.write(cipher[i]);
        console.log(cipher[i])
    }

    if (selector == DECRYPT) {
        decrypt(key, stringArray)
        var string = cipher.join('');
        alert(string);
    }
}


