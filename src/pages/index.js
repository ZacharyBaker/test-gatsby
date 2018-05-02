import React from "react"
import Link from "gatsby-link";
import s from './index.module.css'

export default () =>
 <div style={{ margin: '3rem auto', maxWidth: 600 }}>
   <h1>Hello Gatsby!</h1>
   <p>What a world.</p>
   <img src="https://source.unsplash.com/random/400x200" alt="" />

   <h1 className={s.richard}>Richard Hamming on Luck</h1>
    <div>
      <p>
        From Richard Hamming’s classic and must-read talk, “<a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">
          You and Your Research
        </a>”.
      </p>
      <blockquote>
        <p>
          There is indeed an element of luck, and no, there isn’t. The prepared
          mind sooner or later finds something important and does it. So yes, it
          is luck.{" "}
          <em>
            The particular thing you do is luck, but that you do something is
            not.
          </em>
        </p>
      </blockquote>
    </div>
    <p>Posted April 09, 2011</p>


    <br />
    <div>
      <Link to="/page-2/">PAGE 2</Link>
      <br />
      <Link to="/page-3/">PAGE 3</Link>
      <br />
      <Link to="/counter/">COUNTER</Link>
    </div>
 </div>