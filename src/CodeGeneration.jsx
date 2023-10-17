import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_API_KEY,
  dangerouslyAllowBrowser: true,
});
function TakeInput() {
  return input;
}

async function CodeGeneration() {
  const output = document.getElementById("preview");
  const input = document.getElementById("user-text").value;
  const language = document.getElementById("language-select").value;
  const button = document.getElementById("convert");
  button.disabled = true;
  button.innerHTML = "Converting...";
  console.log(input);
  if (language === "default") {
    alert("Please select a language");
    return;
  } else {
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Convert this code to ${language}`,
        },
        { role: "user", content: `${input}` },
        { role: "user", content: "Output as plaintext" },
      ],
    });
    output.innerHTML = chatCompletion.choices[0].message.content;
    console.log(chatCompletion.choices[0].message.content);
    button.innerHTML = `Convert`;
    button.disabled = false;
  }
}

export default CodeGeneration;
