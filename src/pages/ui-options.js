import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const News = () => (
    <Layout>
      <SEO title="UI Options" />
      
      <div id="content" class="floe-content">
                <div class="flc-toc-tocContainer toc"> </div>

                <article>
                  <h2>About UI Options</h2>
                  <p>
                  User Interface Options (or UI Options) provides a way to enhance or improve website usability, flexibility, and accessibility by providing a way to customize and control aspects of a website without the need for additional software or tools. For those who design, build, or maintain websites, UI Options can also help reveal areas where the web content and structure can be changed to improve flexibility and robustness.
                  </p>
                  <h3>Get UI Options</h3>
                  <p>
                  For Wordpress: <a href="https://github.com/fluid-project/uio-wordpress-plugin">UI Options Wordpress Plugin</a>.
                  </p>

                  <p>
                  From source code: <a href="https://www.npmjs.com/package/infusion">using npm</a>, or <a href="https://github.com/fluid-project/infusion/releases">GitHub</a>.
                  </p>
                  <h3>Guides and Documentation</h3>
                  <p>
                  If installing UI Options using npm or from a release on GitHub (not applicable if using the Wordpress plugin), "<a href="https://docs.fluidproject.org/infusion/development/tutorial-userInterfaceOptions/UserInterfaceOptions.html">Setting Up User Interface Options</a>" will help installing and structuring your code.
                  </p>
                  <p>
                  Once UI Options is installed, <a href="https://docs.fluidproject.org/infusion/development/tutorial-userInterfaceOptions/WorkingWithUserInterfaceOptions.html">"Working with UI Options"</a> can help guide you through setting up your site's styles and markup to take advantage of UI Options.
                  </p>
                </article>


            </div>
            
    </Layout>
  )
  
  export default News