//@ts-nocheck
import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'


interface Props {}

function Texteditor({value,defaultValue,onChange}) {
  return (
    <ReactQuill 
      theme="snow" 
      preserveWhitespace="true"
      className="w-[100%] h-[400px] mb-[80px]"

      modules={{
        clipboard: {
          matchVisual: false,
        }}}
      defaultValue={defaultValue} 
      value={value} 
      onChange={onChange}
    />
  )
}

export default Texteditor
