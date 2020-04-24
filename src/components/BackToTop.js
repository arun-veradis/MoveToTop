import React, { Component } from "react"
import scrollTo from 'gatsby-plugin-smoothscroll';
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"


class BackToTop extends Component {

   scrollToTop() {
      scrollTo('#PageTopControl');
   }

   handleScroll(e) {
      var backTop = document.querySelector('.scroll-top-link');
      var windowTop = window.scrollY || document.documentElement.scrollTop;

      (windowTop > 300) ? backTop.style.display = 'block' : backTop.style.display = 'none';
      (windowTop > 1200) && (backTop.style.display = 'block');

   }

   componentDidMount() {
      if (typeof window !== 'undefined') {
         window.addEventListener('scroll', this.handleScroll)
      }
   }

   render() {
      return (<>
         <span id="PageTopControl" ></span>
         <div class="scroll-top-link" style={{ bottom: '50px', right: '30px',display: 'none' }} onClick={() => this.scrollToTop()} >
            <StaticQuery
               query={
                  graphql`
							query {
								file(relativePath: {eq: "backToTop.png"}) {
								childImageSharp {
									fixed(width: 50) {
									base64
									width
									height
									src
									srcSet
									}
								}
							   }
							  }
							`
               }
               render={data => (
                  <Img fixed={data.file.childImageSharp.fixed} />
               )}
            />
         </div>
      </>
      )
   }
}
export default BackToTop;
