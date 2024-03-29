const Entry = ({image, alttext, blogTitle, Date}) => {
  const style = {
  }

  return (
    <>
    <div className = "blog_entry">
        <img className = "blog_image" src = {image} alt = {alttext}/>
        <div className = "blog_entry_header">
            <h3><a className = "blog_link" href = "blog_entry_1.html">{blogTitle}</a></h3>
            <h6>{Date}</h6>
        </div>
    </div>
    </>
  )
}

export default Entry;