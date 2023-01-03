import React from 'react'
import { useParams } from 'react-router-dom'

export const SearchPage = () => {
    const {query} = useParams()
    console.log(query)
  return (
    <div>SearchPage</div>
  )
}
