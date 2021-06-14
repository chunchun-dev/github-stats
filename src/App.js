import BasicInfo from './components/BasicInfo';
import Header from './components/Header' 
import StatCardContainer from './components/StatCardContainer';
import NameInput from './components/NameInput'
import './main.css'
import {useState, useEffect} from 'react'
import RepoList from './components/RepoList';

function App() {

  const [name, setName] = useState('')
  const [data, setData] = useState({})

  

  const submit = (e) => {
    e.preventDefault()
    fetch('https://api.github.com/users/' + name).then(res => res.json()).then(info => setData(info))
  }

  return (
    <div class="container">
      <Header/>

      <form class="right-side-header" onSubmit={(e)=>{submit(e)}}>
        <input class="dark-mode-text" placeholder="Username" value={name} onChange={(e) => { setName(e.target.value) }} />
        <button type='submit' class='search-button'>Search</button>
      </form>

      <BasicInfo data={data}/>
      
      <StatCardContainer data={data}/>

      <RepoList name={name}/>
      
      <div class="attribution">
        *This project is neither maintained nor endorsed by GitHub
      </div>
    </div>
  );
}

export default App;
