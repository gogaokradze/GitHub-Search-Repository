import React, { useContext, useEffect } from 'react'
import { UserContext } from '../UserContext'
import { Grid } from '@mui/material'
import classes from './Results.module.css'
import Loading from './Loading'


import { Link } from 'react-router-dom'



const Results = () => {
  const { search, data, setData, isLoading, setIsLoading } = useContext(UserContext)

  useEffect(() => {
    if (search) {
      setIsLoading(true)
      fetch(`https://api.github.com/search/repositories?q=${search}in:name&per_page=5`)
        .then(response => response.json())
        .then(data => {
          setIsLoading(false)
          return setData(data)
        });
    }
  }, [search, setData])

  return (
    <>
      {isLoading ? <Loading /> : (

        <div className={classes.center}>
          <Grid item xs={4} >
            {data?.items.map(({ name, owner, description }, index) => (
              <div className={classes.result} key={index}>
                <Link to={`/details/${owner?.login}/${name}`}>
                  <p className={classes.name}>{name}</p>
                  <p className={classes.owner}> Owner:&nbsp; {owner?.login}</p>
                  <p className={classes.description}>Description: &nbsp;{description}</p>
                </Link>
              </div>
            )
            )}
          </Grid>
        </div>

      )}
    </>
  )
}

export default Results