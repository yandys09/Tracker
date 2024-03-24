import React from 'react'

function SearchOrders() {
  return (
    <div className="w-full">
      <label htmlFor="search" className="sr-only">Search</label>
      <input type="text" name="search" id="search" placeholder="Search for orders" className="placeholder-indigo-400 bg-indigo-50 w-full h-10 px-6 py-3 text-xl border border-bray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400" />
    </div>
  )
}

export default SearchOrders
