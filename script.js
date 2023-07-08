document.addEventListener("DOMContentLoaded", function () {
    // Fetch the README.md content
    fetch('README.md')
      .then(response => response.text())
      .then(data => {
        // Convert the markdown content to HTML
        const converter = new showdown.Converter();
        const htmlContent = converter.makeHtml(data);
  
        // Get the placeholder div element
        const readmeDiv = document.getElementById('readme-content');
  
        // Set the converted HTML content as the innerHTML of the div
        readmeDiv.innerHTML = htmlContent;
  
        // Prompt the user for input
        const input = prompt("Enter a sentence or a word:");
  
        // Rest of your existing code...
      });
  });
  