import logo from './logo.svg';
import {useEffect, useState} from 'react'
import './App.css';

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    (async () => {
      setLoading(true)
      const data = await fetch(process.env.REACT_APP_API_URL)
      const response = await data.json()
      setUser(response)
      if(response.name){
        setLoading(false)
      }
    })()
  }, [])
  return (
    <div className="App">
      <div className="card">
        {loading && <p className='card-spinner'>Fetching</p>}
        {!loading && <div className='card-content'>
          <div className="card-img">
            <img src={user.image} alt="mtp"></img>
          </div>
          <h1 className="card-name">{user.name}</h1>
          <p className="card-pos">{user.position}</p>
        </div>}
      </div>
    </div>
  );
}

export default App;
