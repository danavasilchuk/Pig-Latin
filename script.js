document.addEventListener("DOMContentLoaded", function () {
    // Prompt the user for input
    const input = prompt("Enter a sentence or a word:");
  
    // Check if the input is not empty or a single-letter word
    if (input.trim() === "" || input.trim().length === 1) {
      alert("Input can't be translated.");
    } else {
      // Split the input into individual words
      const words = input.split(" ");
  
      // Array to store translated words
      const translatedWords = [];
  
      // Iterate over each word and apply Pig Latin rules
      for (let word of words) {
        // Convert the word to lowercase for consistent comparison
        const lowerCaseWord = word.toLowerCase();
  
        // Check if the word starts with a vowel
        if (lowerCaseWord[0].match(/[aeiou]/)) {
          translatedWords.push(word + "way");
        }
        // Check if the word starts with a consonant
        else if (lowerCaseWord[0].match(/[bcdfghjklmnpqrstvwxyz]/)) {
          // Check if the word starts with two consonants
          if (lowerCaseWord[1].match(/[bcdfghjklmnpqrstvwxyz]/)) {
            translatedWords.push(word.slice(2) + word.slice(0, 2) + "ay");
          } else {
            translatedWords.push(word.slice(1) + word[0] + "ay");
          }
        }
      }
  
      // Build the translated sentence
      const translatedSentence = translatedWords.join(" ");
  
      // Create a paragraph element to display the translated sentence
      const translatedOutput = document.createElement("p");
      translatedOutput.textContent = "Translated sentence: " + translatedSentence;
  
      // Append the translated output to the body of the page
      document.body.appendChild(translatedOutput);
    }
  });
  