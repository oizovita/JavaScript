const ENG_LETTERS = 26;

var alphabet = '0abcdefghijklmnopqrstuvwxyz'
var stringArray = ''
var cipher = [];
var stringArray = prompt("Enter string", "");
var keyword = prompt("Enter key", "");
var selector = prompt("Enter selector", "");

userChoise(selector, stringArray, keyword)

function encrypt(keyword, stringArray) {
    var k = 0;
    for (var i = 1; i <= 26; i++) {
        for (var j = 0; j < keyword.length; j++) {

            if (keyword[j] == alphabet[i]) {

                if ((stringArray.charCodeAt(k) >= alphabet.charCodeAt(0)) && (stringArray.charCodeAt(k) <= alphabet.charCodeAt(25))) {
                    cipher[k] = stringArray.charCodeAt(k) + (i % ENG_LETTERS);
                    temp = cipher[k];
                    cipher[k] = String.fromCharCode(cipher[k])

                    if (temp > alphabet.charCodeAt(25)) {
                        cipher[k] = alphabet.charCodeAt(0) + (temp - alphabet.charCodeAt(25)) - 1;
                        cipher[k] = String.fromCharCode(cipher[k]);
                    }
                }
                k++;
            }
        }
    }
}
function decrypt(keyword, stringArray) {
    var k = 0;
    for (var i = 1; i <= 26; i++) {
        for (var j = 0; j < keyword.length; j++) {

            if (keyword[j] == alphabet[i]) {

                if ((stringArray.charCodeAt(k) >= alphabet.charCodeAt(0)) && (stringArray.charCodeAt(k) <= alphabet.charCodeAt(25))) {
                    cipher[k] = stringArray.charCodeAt(k) - (i % ENG_LETTERS);
                    temp = cipher[k];
                    cipher[k] = String.fromCharCode(cipher[k])

                    if (temp < alphabet.charCodeAt(0)) {
                        cipher[k] = alphabet.charCodeAt(0) + (temp - alphabet.charCodeAt(25)) - 1;
                        cipher[k] = String.fromCharCode(cipher[k]);
                    }
                }
                k++;
            }
        }
    }
}

function userChoise(selector, stringArray, keyword) {
    const ENCRYPT = 1;
    const DECRYPT = 2;

    if (selector == ENCRYPT) {
        encrypt(keyword, stringArray)

        var string = cipher.join('');
        alert(string);
        document.write(cipher[i]);
        console.log(cipher[i])
    }

    if (selector == DECRYPT) {
        decrypt(keyword, stringArray)
        var string = cipher.join('');
        alert(string);
    }
}


