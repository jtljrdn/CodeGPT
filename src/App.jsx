import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CodeGeneration from "./CodeGeneration.jsx";


function App() {
  // TODO: Add a button to copy the code

  return (
    <>
      <div className="text-center position-absolute top-0 start-50 translate-middle-x">
        <p className="h1 mt-5">
          Code<span className="gpt">GPT</span>
        </p>
        <p className="h3 mt-2">
          Input your code and convert it to another language
        </p>
      </div>
      <div className="container text-center">
        <div className="row align-items-center">
          <div className="col">
            <textarea
              id="user-text"
              className=""
              placeholder="Input code here"
            ></textarea>
          </div>
          <div className="col">
            <select
              className="form-select language-select"
              aria-label="Default select example"
              id="language-select"
            >
              <option value="default">Select Language</option>
              <option value="Python">Python</option>
              <option value="Javascript">Javascript</option>
              <option value="Java">Java</option>
              <option value="C">C</option>
              <option value="C++">C++</option>
              <option value="C#">C#</option>
            </select>
            <button className="btn btn-primary mt-5" onClick={CodeGeneration} id='convert'>
              Convert
            </button>
          </div>
          <div className="col">
            <div className="code-output"></div>
            <textarea
              disabled
              id="preview"
              className=""
              placeholder="Output code here"
            ></textarea>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
