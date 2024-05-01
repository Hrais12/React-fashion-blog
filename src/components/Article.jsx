import React from 'react'

function Article() {
  return (
    <div>
        <section>
  <article>

    <time datetime="2020-12-11" className='time'>11/12/20</time>
    <h2 className='title'>On the Street in Brooklyn</h2>
    <img src="/blog-image-1.jpg" alt="pic1" />
    <p>Cray Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta iusto libero a id eum facilis repellendus aperiam dolorem recusandae vel accusantium veniam unde optio commodi incidunt, eaque molestias eos porro.</p>
    <a href="#"><div className='continue'>Continue...</div></a>
  </article>



  <article >

<time datetime="2020-11-11" className='time'>11/11/20</time>
<h2 className='title'>Vintage in Vogue</h2>
<img src="/blog-image-2.jpg" alt="pic2" />
<p>Selfies ipsum dolor sit amet consectetur adipisicing elit. Soluta iusto libero a id eum facilis repellendus aperiam dolorem recusandae vel accusantium veniam unde optio commodi incidunt, eaque molestias eos porro.</p>
<a href="#"><div className='continue'>Continue..</div></a>
</article>

</section>
    </div>
  )
}

export default Article