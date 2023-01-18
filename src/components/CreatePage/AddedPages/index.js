import React from 'react'
import "../createPage.scss"

const AddedPages = (props) => {

    const {savedpages, handleImage} = props
  return (
    <div className="left__container">
        {savedpages?.length > 0 && savedpages?.map(({value, link, id}) => (
                <div key={id}>
                    <img src={link} alt={value} onClick={() =>handleImage(id)} />
                </div>

        ))}
            </div>
  )
}

export default AddedPages