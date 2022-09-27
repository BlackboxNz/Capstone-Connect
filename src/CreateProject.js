// CreatePost.js
import { useState } from 'react'
import { DataStore } from '@aws-amplify/datastore'
import { Project } from './models'

export default function CreatePost () {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = async e => {
    // When the form is submitted, prevent the default form behavior (don't refresh the page)
    e.preventDefault()
    // Save our Project using the data the user inputted.
    await DataStore.save(
        new Project({
            TeamName,
            ProjectName,
            Description,
            Brief,
            Tag,
            Image,
            Video
        })
    );
    // set the tile and content back to empty strings
    setTitle('')
    setContent('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='title'>Title</label>
        {/* Update the title in state every time the title field is changed */}
        <input type='text' name='title' id='title' value={title} onChange={e => setTitle(e.target.value)} />
      </div>
      <div>
        <label htmlFor='content'>Content</label>
        {/* Update the content in state every time the content field is changed */}
        <textarea id='content' name='content' type='text' value={content} onChange={e => setContent(e.target.value)} />
      </div>
      <input type='submit' value='create' />
    </form>
  )
}