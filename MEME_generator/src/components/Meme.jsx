import React from "react";

const Meme = () => {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState([]);

  function getMemeImage() {
    
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    const url = allMemeImages[randomNumber].url;
    setMeme((prevMeme) => ({ ...prevMeme, randomImage: url }));
  }

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        setAllMemeImages(data.data.memes);
      });
  }, []);

 
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="form">
        <section>
          <input
            type="text"
            className="form--input1"
            placeholder="Top Text"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />

          <input
            type="text"
            className="form--input2"
            placeholder="Bottom Text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />
        </section>

        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>

      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />

        <h2 className="meme--text-top">{meme.topText}</h2>

        <h2 className="meme--text-bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
};

export default Meme;
