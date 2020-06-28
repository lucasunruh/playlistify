import React from 'react'
import axios from 'axios'
import './App.css'

function App () {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <a className='navbar-brand' href='#'>Playlistify</a>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item active'>
              <a className='nav-link' href='#'>Home <span className='sr-only'>(current)</span></a>
            </li>
          </ul>
        </div>
      </nav>
      <button className='btn btn-primary' onClick={
        () => {
          fetch('https://agile-brook-03586.herokuapp.com/')
            .then(res => res.text())
            .then(data => console.log(data))
        }
      }>
        Request
      </button>
      <button className='btn btn-primary' onClick={
        () => {
          axios.get('https://agile-brook-03586.herokuapp.com/playlists')
            .then(res => console.log(res.data))
        }
      }>
        Get Playlists
      </button>
      <input class='form-control' type='text' onChange={
        (e) => {
          axios.post('https://agile-brook-03586.herokuapp.com/playlists/add', {
            'playlist_name': e.target.value
          })
            .then(res => {
              console.log(res)
              console.log(res.data)
            })
        }
      } />
    </>
  )
}

export default App
