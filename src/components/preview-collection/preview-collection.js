import React from 'react'
import './preview-collection.styles.scss'

export const CollectionPreview = ({title, items}) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>Title</h1>
      <div className="preview">
        {
          items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <div key={item.id}>{item.name}</div>
          ))
        }
      </div>
    </div>
  )
}
