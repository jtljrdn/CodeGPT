import OpenAI from 'openai';
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_API_KEY,
  dangerouslyAllowBrowser: true,
});
function TakeInput(){

  return input
}

async function CodeGeneration(){
  const input = document.getElementById("user-text").value;
  console.log(input);
  const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{"role": "user", "content": `Convert this code to C++`},
               {"role": "user", "content": input}],
  });
  console.log(chatCompletion.choices[0].message.content);
}

export default CodeGeneration