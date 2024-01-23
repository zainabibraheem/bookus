import React, { useState, useEffect } from 'react'
import search from '../images/search.jpg'
import { FaSearch } from 'react-icons/fa'
import { MdClear } from 'react-icons/md'
import axios from 'axios'

function Search() {

  const URl = 'https://openlibrary.org/search.json?title='

  const [bookList, setBookList] = useState([])
  const [searchTitle, setSearchTitle] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)








 /* const fetchedbooks = async () => {
    const response = await axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${searchTitle}&key=AIzaSyDb2k0Ukf9SkgMW9PHpJCHqT_YlEVuiSzc`)
      .then((response) => { setBookList(response.data.items) })
      .catch((err) => {
        console.log('Err', err);

      })

    console.log(bookList)

  }

  useEffect(() => {
    console.log(searchTitle)


    fetchedbooks()

  }, [searchTitle]);

  const newBookList = bookList.map((item) => {
    return (
      <div>
        <div>{item.volumeinfo.author}</div>
        <div>{item.volumeinfo.panelizationSummary}</div>
        <div>{}</div>
        <div>{}</div>
      </div>
    )
  }) 

  
*/


/*useEffect (() => {
  console.log(fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTitle}&key=AIzaSyDb2k0Ukf9SkgMW9PHpJCHqT_YlEVuiSzc`))
  console.log(searchTitle)
}, [searchTitle])
*/

  return (
    <div className='search-section'  >
      {isLoading && <div> LOADING... </div>}
      {error && <div>{error}</div>}
      <div className='search' style={{
        width: '100%',
        backgroundImage: `url(${search})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} ><div className='search-div'>
          <h2>Discover new books</h2>
          <div className='search-bar'>
            <input type='text' placeholder='search for books' className='search-input'
              onChange={(e) => { setSearchTitle(e.target.value) }} value={searchTitle}
            />
            <FaSearch className='search-icon' />
            <MdClear className='clear-icon' />
          </div>
        </div></div>


    <div></div>

    </div>
  )
}

export default Search
