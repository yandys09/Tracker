import React from 'react'
import Button from '../components/button'

function Pagination() {
  return (
    <div className='flex items-center gap-6 mt-5'>
      <Button>Previous</Button>
      <Button>Next</Button>
    </div>
  )
}

export default Pagination
