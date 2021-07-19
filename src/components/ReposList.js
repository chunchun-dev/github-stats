import React from 'react'
import styles from '../ReposList.module.css'
import { GoRepo } from 'react-icons/go'
import { AiFillStar } from "react-icons/ai";
import { GoRepoForked } from 'react-icons/go'
import {motion} from 'framer-motion'

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

function Repo({repo}) {
    return (
        <motion.a href={repo.html_url} target='_empty' variants={item}>
            <div className={styles.repo}>
                <h1 className={styles.repoName}><GoRepo/>{' ' + repo.name}</h1>
                <div className={styles.stats}>
                    <p><AiFillStar/> {repo.stargazers_count}</p>
                    <p><GoRepoForked/> {repo.forks}</p>
                </div>
            </div>
        </motion.a>
    )
}

function ReposList({repos}) {
    if (repos.length > 0) {
        return (
            <motion.div className={styles.reposList} variants={container} initial="hidden" animate="visible">
                {repos.map((repo, id) => (
                    <Repo repo={repo} key={id}/>
                ))}
            </motion.div>
        )
    } else {
        return null
    }
}

export default ReposList
