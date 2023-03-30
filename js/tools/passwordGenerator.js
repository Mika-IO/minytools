function copyPassword() {
    var copyText = document.getElementById("password").value;
    navigator.clipboard.writeText(copyText)
    document.getElementById("copy-password").innerText = "Copy to clipboard ✔️";
}


function generatePassword(){
    const length = document.getElementById("password-length").value;
    const includeUppercase = document.getElementById("uppercase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSymbols = document.getElementById("symbols").checked;
  
    let characters = "abcdefghijklmnopqrstuvwxyz";
    if (includeUppercase) {
      characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (includeNumbers) {
      characters += "0123456789";
    }
    if (includeSymbols) {
      characters += "!@#$%^&*()_+";
    }
  
    let password = "";
    for (let i = 0; i < length; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  
    document.getElementById("password").value = password;
    document.getElementById("copy-password").innerText = "Copy to clipboard";
}
