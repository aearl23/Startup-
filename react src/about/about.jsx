import React from 'react';
import './about.css';

export function About(props) {
  const [imageUrl, setImageUrl] = React.useState('');
  const [quote, setQuote] = React.useState('Loading...');
  const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');

  // We only want this to render the first time the component is created and so we provide an empty dependency list.
  React.useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.content);
        setQuoteAuthor(data.author);
      })
      .catch();

    const imageUrl = 'C:\Users\aaron\OneDrive\Desktop\CS260\Startup-\react src\about\Screenshot 2024-02-05 172230.png';
    setImageUrl(imageUrl);
  }, []);

  return (
      <div>
        <div id='picture' className='picture-box'>
            <img src={imageUrl} alt="Random Image" />
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
  );
}


