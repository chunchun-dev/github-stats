import React, {useEffect, useState} from 'react'
import './RepoList.css'

function Repo({name, url, stargazers_count, watchers, forks, owner}) {
    return (
        <a href={url} target='_empty' className='repo-link'>
            <div className='repo-card'>
                <img src={owner.avatar_url} height={'150vw'} className='res-prof'/>
                <div className="repo-details">
                    <h1 className='repo-name'>{name}</h1>
                    <div className="repo-stats">
                        <p className="stars">{stargazers_count} stars</p>
                        <p className="watchers">{watchers} watchers</p>
                        <p className="forks">{forks} forks</p>
                    </div>
                </div>
            </div>
        </a>
    )
}



function RepoList({name}) {

    const [repos, setRepos] = useState([])

    useEffect(() => {
        
        fetch(`https://api.github.com/users/${name}/repos`).then(res => res.json()).then(info => setRepos(info))

    }, [name])

    if (repos.length > 0) {
        return (
            <div className='repoList'>
                {repos.length > 0 ? <h1>Repositories</h1> : ''}
                {
                    repos.map((repo, id) => {
                        return <Repo {...repo} key={id} />
                    })
                }
            </div>
        )
    } else {
        return null
    }
}

export default RepoList
