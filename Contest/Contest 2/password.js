function checkPasswordStrength(password) {
    // TODO: Implement the password strength check
    if (password.length < 8) {
        return "Weak";
    }
    let upparcase = false;
    let lowerCase = false;
    let digith = false;
    for (const char of password) {
        let uniCode = char.codePointAt(0);
        if (uniCode >= 48 && uniCode <= 57) {
            digith = true;
        }
        if (uniCode >= 65 && uniCode <= 90) {
            upparcase = true;
        }
        if (uniCode >= 97 && uniCode <= 122) {
            lowerCase = true;
        }
    }
    if (upparcase && lowerCase && digith) {
        return "Strong";
    }
    return "Weak";
}

console.log(checkPasswordStrength('Password123'))