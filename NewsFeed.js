import React, { useEffect, useState } from 'react';

const NewsFeed = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Aqui você pode usar uma API para buscar as notícias
    const fetchNews = async () => {
      const response = await fetch('https://api.exemplo.com/noticias');
      const data = await response.json();
      setNews(data);
    };
    fetchNews();
  }, []);

  return (
    <div>
      {news.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.summary}</p>
          <a href={`/book/${item.id}`}>Leia mais</a>
        </div>
      ))}
    </div>
  );
};

export default NewsFeed;
