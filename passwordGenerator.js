//Random Password Generator in javaScript
const length = 12;
const sChars = true;
const cChars = true;
const nums = true;
const syms = true;

function generatePassword(length, sChars, cChars, nums, syms) {
    
    const passwordLength = 15;
    const smallCharacters = "abcdefghijklmnopqrstuvwxyz";
    const capitalCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    if (length < 8 || length > 128) {
        console.log(`Password must be between 8 and 128 characters long.`);
        return;
    }
    if (!sChars && !cChars && !nums && !syms) {
        console.log(`At least one character type must be selected.`);
        return;
    }
    let characterPool = "";
    characterPool += sChars ? smallCharacters : "";
    characterPool += cChars ? capitalCharacters : "";
    characterPool += nums ? numbers : "";
    characterPool += syms ? symbols : "";
    let randomChar = "";
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * characterPool.length);
        randomChar += characterPool[randomIndex];
        }
console.log(randomChar);
}

generatePassword(length, sChars, cChars, nums, syms);
