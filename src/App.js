import './App.css';
import StatPage from './pages/StatPage';
import {useState} from 'react'
import styles from './SearchPage.module.css'
import {motion} from 'framer-motion'

const searchpage = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
  }
};

function App() {

  const [username, setUsername] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [data, setData] = useState({})
  const [repos, setRepos] = useState({})

  const submit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    fetch('https://api.github.com/users/' + username).then(res => res.json()).then(info => setData(info))
    fetch(`https://api.github.com/users/${username}/repos`).then(res => res.json()).then(info => setRepos(info))
  }

  if (submitted) {
    return (
      <div className="App">
        <StatPage data={data} username={username} repos={repos}/>
      </div>
    );
  } else {
    return (
      <motion.div className={styles.searchPage} variants={searchpage} initial='hidden' animate='visible'>
        <div className={styles.content}>
          <h1>Find your Github profile</h1>
          <form onSubmit={(e) => {
            e.preventDefault()
            setSubmitted(true)
            fetch('https://api.github.com/users/' + username).then(res => res.json()).then(info => setData(info))
            fetch(`https://api.github.com/users/${username}/repos`).then(res => res.json()).then(info => setRepos(info))
          }}>
            <input className={styles.searchField} value={username} onChange={(e) => { setUsername(e.target.value) }}/>
          </form>
        </div>
      </motion.div>
    )
  }
}

export default App;
