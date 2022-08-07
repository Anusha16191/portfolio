import React from 'react'
import "./Project.css"
import blog from "./blog.png"

const Project = () => {
  return (
    <div className='container project'>
      <h3>COMMENT SANITIZER</h3>
      <a href='https://github.com/Abhijith-Jaideep/blog-V1.0'>(View Repository)</a>
      <div className='d-flex'>
        <p> A corporate site has published a blogging site with various content and comments tuned on. 
          There are a lot of malicious people that are posting negative comments in the comment 
          sections and usage of these negative words or cyberbullying has increased on cyber platforms by the young
           community. It is increasing day by day due to active participation on social media. The users are increasing
            in an exponential manner and their time, devotion is also increasing in the same manner. They are free to say 
            anything on these blogging Sites without any rules and regulations. It affects the accessibility of the platform
             by the general public .<p>The Comment Sanitizer is developed for solving this problem. This software analyzes these 
             comments which contain cyberbullying words and may help to limit this content on these platforms so that a affirmative
              discussion can take place through these platforms. So this site can be used for all the age groups and good interaction 
              can be take place. So this project helps the blogging site to create a good ecosystem.</p>  

            </p>
          
      <img src={blog}/>
      </div>
      <p>The project involves determining ways to identify bullying in text by analysing and experimenting with different methods to find a feasible way of classifying such comments. We proposed an efficient algorithm to identify the bullying text and aggressive comments and analyse these comments to check the validity. NLP  is used for analysing the social comment and identifying the aggressive effect of an individual or a group. An effective classifier acts as the core component in 
        a final prototype system that can detect cyberbullying on social media. </p>
     

    </div>
  )
}

export default Project