function validateEmail(str) {
    if (str.includes("@") || str.includes(".")) {
      return  "Email Vlidated"
    } else {
        return "Invalid Email"
    }
}

module.exports = validateEmail;
