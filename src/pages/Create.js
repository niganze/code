import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

function Create() {
  return (
    <form className='create'>
        <input type="title" name="title" placeholder={'Title'} />
        <input type="summary" name="text" placeholder={'summary'} />
        <input type={'file'}/>
        <ReactQuill/>
        <button type="submit" style={
            
            {marginTop:'20px'}
        }>Create post</button>
    </form>
  ) 
}

export default Create
