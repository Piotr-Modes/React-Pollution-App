import React from 'react'

const withLoading = Component => {
  return ({ isLoading, ...props }) => {
    if (!isLoading) return <Component {...props} />
    return <div className='loader-2'></div>
  }
}

export default withLoading
