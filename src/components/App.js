import React, { useState, useEffect } from "react"




function App() {
  const [loaded, setLoaded] = useState(false)
  const [image, setImage] = useState("")

  function handleRecievedImage(image) {
    setImage(image)
    setLoaded(true)
  }


  useEffect(()=>{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(data => handleRecievedImage(data.message))
  },[])


  return (
    <div>
      {loaded ? <img src={image} alt="A Random Dog" />: <p>Loading...</p>}
    </div>
  )
}

export default App