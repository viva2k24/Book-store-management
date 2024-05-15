import React, { useEffect, useState } from 'react'
import { Card } from "flowbite-react";
const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect( () => {
    fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setBooks(data))
  }, [])
  return (
    <div className="mt-28 px-4 lg:px24">
      <h2 className='text-5xl font-bold text-center'>
          All Books are here
      </h2>
      <div>
        {
          books.map(book =>
                <Card href="#" className="max-w-sm">
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                  </p>
                </Card>
            )
        }
      </div>
    </div>
  )
}

export default Shop