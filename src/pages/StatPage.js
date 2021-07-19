import React from 'react'
import ReposList from '../components/ReposList'
import styles from '../StatPage.module.css'

function StatCard({data, dataName}) {
    return (
        <div className={styles.statCard}>
            <h1>{data}</h1>
            <p>{dataName}</p>
        </div>
    )
}

function StatPage({data,username,repos}) {
    return (
        <div className={styles.statPage}>
            <img src={data.avatar_url} className={styles.avatar}/>
            <h1>{username}</h1>
            <a href={data.html_url} target='_empty'>@{data.login}</a>
            <div className={styles.stats}>
                <StatCard data={data.public_repos} dataName={'Public Repos'} />
                <StatCard data={data.public_repos} dataName={'Public Repos'} />
                <StatCard data={data.public_repos} dataName={'Public Repos'} />
            </div>
            <ReposList repos={repos}/>
        </div>
    )
}

export default StatPage
