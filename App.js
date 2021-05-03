import './App.css';
import Axios from 'axios'
import {useState} from 'react'

function App() {

  const [details, setDetails] = useState([])

  const api = 'http://hp-api.herokuapp.com/api/characters'


  const get__details = ()=>{
          
    Axios.get(api).then(res=>{
      const result = res.data
      console.log(result)
      setDetails(result)
    })
  

  }
  
    
  return (
    <div className="App">
            <h1>Harry potter</h1>

            <button onClick={get__details}>get details</button>

            {details.map(detail=>(
              <div className="harry__potter">
                <p>{detail.name}</p>
                <p>{detail.house}</p>
                <p>{detail.gender}</p>
              </div>
            ))}
           
    </div>
  );
}

export default App;
