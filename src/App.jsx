import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CodeGeneration from "./CodeGeneration.jsx";
import Update from "./CodeOutput";

function App() {
  // TODO: Add a dropdown to change the language
  // TODO: Change the layout
  // TODO: Add a button to copy the code
  // TODO: Add box for output with syntax highlighting

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
            >
              <option value="default">Select Language</option>
              <option value="python">Python</option>
              <option value="javascript">Javascript</option>
              <option value="java">Java</option>
              <option value="c">C</option>
              <option value="c++">C++</option>
              <option value="c#">C#</option>
            </select>
            <button className="btn btn-primary mt-5" onClick={CodeGeneration}>
              Convert to C++
            </button>
          </div>
          <div className="col">
            <div className="code-output"></div>
                <textarea
                  disabled
                  id="output-text"
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
