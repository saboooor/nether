function toggleNav() {
  if (document.getElementById("mobilenav").style.height != "100%") {
    document.getElementById("mobilenav").style.height = "100%";
    document.getElementById("mobilenav").style.opacity = "100%";
    document.getElementById("mobilenav").style.paddingTop = "50px";
    document.getElementById("navigation").style.backgroundColor = 'rgba(0,0,0, 0.8)';
  }
  else {
    document.getElementById("mobilenav").style.height = "0";
    document.getElementById("mobilenav").style.opacity = "0";
    document.getElementById("mobilenav").style.paddingTop = "0";
    document.getElementById("navigation").style.backgroundColor = null;
  }
}

function sleep(ms) {
	return new Promise(res => setTimeout(res, ms));
}

async function copyTextToClipboard(text) {
  var elem = document.getElementById(text);
  if (elem.innerText == 'Copied to clipboard!') return;
  var textArea = document.createElement("textarea");
  textArea.style.opacity = '0';
  textArea.value = elem.innerText;

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  document.execCommand('copy');
  elem.innerText = 'Copied to clipboard!';
  await sleep('1000');
  elem.innerText = textArea.value;

  document.body.removeChild(textArea);
}