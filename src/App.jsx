import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import CodeGeneration from './CodeGeneration.jsx'


function App() {
  
// TODO: Add a dropdown to change the language
// TODO: Change the layout
// TODO: Add a button to copy the code
// TODO: Add box for output with syntax highlighting

  return (
    <>

    <div className='text-center position-absolute top-0 start-50 translate-middle-x'>
      <p className='h1 mt-5'>Code<span className='gpt'>GPT</span></p>
      <p className='h3 mt-2'>Input your code and convert it to another language</p>
    </div>

    <textarea id='user-text' className='position-absolute ms-5 mt-5 top-50 translate-middle-y' placeholder='Input code here' ></textarea>
    <button className='btn btn-primary position-absolute top-50 end-0 translate-middle-y me-5' onClick={CodeGeneration}>Convert to C++</button>
    </>
  )
}

export default App
