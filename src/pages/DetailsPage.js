import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import moment from 'moment'

import classes from './DetailsPage.module.css'


const DetailsPage = () => {
  const { name, repo } = useParams()
  const [match, setMatch] = useState()

  useEffect(() => {
    fetch(`https://api.github.com/repos/${name}/${repo}`)
      .then(response => response.json())
      .then(data => setMatch(data));
  }, [name, repo])

  console.log(match?.score)
  return (

    <>
      <Header />
      <div className={classes.container}>
        <div className={classes.title}>
          <p className={classes.score}>Stars: {match?.stargazers_count}</p>
          <h2 className={classes.name}>{match?.name}</h2>
          <a href={match?.html_url} target='_blank' rel='noreferrer'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className={classes.icon}
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              role="img"
            >
              <title>GitHub</title>
              <path stroke="none" d="M0 0h24v24H0z"></path>
              <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2 4.2 4.2 0 00-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 00-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 00-.1 3.2A4.6 4.6 0 004 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"></path>
            </svg>
          </a>
        </div>
        <div className={classes.info}>
          <p>Author:&nbsp; {match?.owner?.login}</p>
          <p>Description: {match?.description}</p>

          <p>Archived: {match?.archived ? ('true') : ('false')}</p>
          <p>Default branch: {match?.default_branch}</p>
          <p>Created at: {moment(match?.created_at).format('MMM Do YYYY')}</p>
          <p>Last updated: {moment(match?.updated_at).fromNow()}</p>
        </div>




      </div>
    </>
  )
}

export default DetailsPage