import React from 'react'

function Article({articles}) {
  return (
    <div>
       <section>
  
           {articles.map((article) => (
          <article >
            <time datetime={article.date} className='time'>{article.date}</time>
            <h2 className='title'>{article.title}</h2>
            <img src={article.image} alt='pic' />
            <p>{article.content}</p>
            <a href="#"><div className='continue'>Continue...</div></a>
          </article>
         ))}

        </section>
    </div>
  )
}

export default Article