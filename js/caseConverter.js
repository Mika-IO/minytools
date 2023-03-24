function sentenceCase() {
  var input = document.getElementById("input").value;
  var output = input.toLowerCase();
  output = output.charAt(0).toUpperCase() + output.slice(1);
  document.getElementById("output").value = output;
  document.getElementById("caseConverterCopy").innerText = "Copy to clipboard";
}

function lowerCase() {
  var input = document.getElementById("input").value;
  var output = input.toLowerCase();
  document.getElementById("output").value = output;
  document.getElementById("caseConverterCopy").innerText = "Copy to clipboard";
}

function upperCase() {
  var input = document.getElementById("input").value;
  var output = input.toUpperCase();
  document.getElementById("output").value = output;
  document.getElementById("caseConverterCopy").innerText = "Copy to clipboard";
}

function capitalizedCase() {
  var input = document.getElementById("input").value;
  var output = input.toLowerCase().replace(/\b\w/g, function (c) {
    return c.toUpperCase();
  });
  document.getElementById("output").value = output;
  document.getElementById("caseConverterCopy").innerText = "Copy to clipboard";
}

function alternatingCase() {
  var input = document.getElementById("input").value;
  var output = "";
  for (var i = 0; i < input.length; i++) {
    if (i % 2 == 0) {
      output += input.charAt(i).toUpperCase();
    } else {
      output += input.charAt(i).toLowerCase();
    }
  }
  document.getElementById("output").value = output;
  document.getElementById("caseConverterCopy").innerText = "Copy to clipboard";

}

function titleCase() {
  var input = document.getElementById("input").value;
  var output = input
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
  document.getElementById("output").value = output;
  document.getElementById("caseConverterCopy").innerText = "Copy to clipboard";
}

function inverseCase() {
  var input = document.getElementById("input").value;
  var output = "";
  for (var i = 0; i < input.length; i++) {
    if (input.charAt(i) == input.charAt(i).toLowerCase()) {
      output += input.charAt(i).toUpperCase();
    } else {
      output += input.charAt(i).toLowerCase();
    }
  }
  document.getElementById("output").value = output;
  document.getElementById("caseConverterCopy").innerText = "Copy to clipboard";
}
function downloadText() {
  var text = document.getElementById("output").value;
  var filename = "output.txt";
  var element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute("download", filename);
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
  document.getElementById("caseConverterCopy").innerText = "Copy to clipboard";
}

function copyToClipboard() {
  var text = document.getElementById("output").value;
  navigator.clipboard.writeText(text);
  document.getElementById("caseConverterCopy").innerText = "Copy to clipboard ✔️";
}

function clearText() {
  document.getElementById("input").value = "";
  document.getElementById("output").value = "";
  document.getElementById("caseConverterCopy").innerText = "Copy to clipboard";
}
