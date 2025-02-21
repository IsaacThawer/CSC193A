
// It first alerts "Hello, world!" and then increases the text area font size to 24.
function bigger() {
    alert("Hello, world!");
    document.getElementById("textArea").style.fontSize = "24pt";
  }
  
 
  // If "FancyShmancy" is selected, apply bold, red, wavy underlined text;
  // if "BoringBetty" is selected, revert to normal styling.
  function applyStyle() {
    var textArea = document.getElementById("textArea");
    var isFancy = document.getElementById("fancyRadio").checked;
    
    if (isFancy) {
      textArea.style.fontWeight = "bold";
      textArea.style.color = "blue";
      textArea.style.textDecoration = "underline";
      alert("FancyShmancy style applied!");
    } else {
      // Revert styling for "BoringBetty"
      textArea.style.fontWeight = "normal";
      textArea.style.color = "black";
      textArea.style.textDecoration = "none";
      alert("BoringBetty style applied!");
    }
  }
  
 
  // It uppercases the text in the text area and appends "-MOO" to the last word of each sentence.
  function moo() {
    var textArea = document.getElementById("textArea");
    var text = textArea.value;
    
    // Convert the entire text to uppercase.
    text = text.toUpperCase();
    
    // Split the text into sentences by the period character.
    var sentences = text.split(".");
    
    for (var i = 0; i < sentences.length; i++) {
      // Trim any whitespace.
      sentences[i] = sentences[i].trim();
      
      if (sentences[i].length > 0) {
        // Split the sentence into words.
        var words = sentences[i].split(" ");
        // Append "-MOO" to the last word.
        words[words.length - 1] = words[words.length - 1] + "-MOO";
        // Join the words back into a sentence.
        sentences[i] = words.join(" ");
      }
    }
    
    // Rejoin the sentences with a period and a space.
    var result = sentences.join(". ");
    
    // If the original text ended with a period, add one back.
    if (text.trim().endsWith(".")) {
      result += ".";
    }
    
    // Update the text area with the new text.
    textArea.value = result;
  }
  