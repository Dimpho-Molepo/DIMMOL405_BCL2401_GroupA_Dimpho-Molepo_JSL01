function validateSyntax() {

  let input = document.getElementById('petInput').value;

  let result = '';


  if (input.match(/^pet_[0-9]{4}[a-zA-Z]+$/)) {
      result = "Valid Syntax 🟢";
    } else {
      result = "Invalid Syntax 🔴";
    }

  document.getElementById('result').innerText = result;
}


