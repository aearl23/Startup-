import React from 'react';
import './about.css';

export function About(props) {
  const [imageUrl, setImageUrl] = React.useState('');
  const [quote, setQuote] = React.useState('Loading...');
  const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');

  // We only want this to render the first time the component is created and so we provide an empty dependency list.
  React.useEffect(() => {
    const random = Math.floor(Math.random() * 1000);
    fetch(`https://picsum.photos/v2/list?page=${random}&limit=1`)
      .then((response) => response.json())
      .then((data) => {
        const containerEl = document.querySelector('#picture');

        const width = containerEl.offsetWidth;
        const height = containerEl.offsetHeight;
        const apiUrl = `https://picsum.photos/id/${data[0].id}/${width}/${height}?grayscale`;
        setImageUrl(apiUrl);
      })
      .catch();

    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.content);
        setQuoteAuthor(data.author);
      })
      .catch();
  }, []);

  let imgEl = '';

  if (imageUrl) {
    imgEl = <img src={image} alt='stock background' />;
  }

  return (
    <main className='container-fluid bg-secondary text-center'>
      <div>
        <div id='picture' className='picture-box'>
          {imgEl}
        </div>

        <p>
          Have you ever had a great business idea you wished you could bring to life? Have you ever sat for hours thinking
          of a way to start a business or a new product to develop? TechConnect can bring determined students together with 
          available technology to further innovation and produce revenue for the university, faculty, and students.
        </p>

        <p>
          This app serves to connect student entrepreneurs to ideas and projects in a university setting. The app will serve as a 
          community where IP, disclosures, and patents can be shared wtih entrepreneurs and funding sources to provide rapid technological
          development.
        </p>

        <p>
          Find an idea, prototype, or developed techonolgy and begin connecting with other collaborators to license the tech and bring it to market!
        </p>

        <div className='quote-box bg-light text-dark'>
          <p className='quote'>{quote}</p>
          <p className='author'>{quoteAuthor}</p>
        </div>
      </div>
    </main>
  );
}


