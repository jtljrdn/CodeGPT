import prism from 'prismjs';

function Update(text) {
    let result_element = document.querySelector("#highlighting-content");
    // Update code
    result_element.innerText = text;
    // Syntax Highlight
    prism.highlightElement(result_element);
  }

  export default Update