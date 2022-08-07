import React from 'react'
import "./Skill.css"
const Skill = () => {
  return (
    <div className='container skill'>
      <div class="row row-cols-1 row-cols-md-3 g-4 text-black">
  <div class="col">
    <div class="card">
     
      <div class="card-body">

      <p class="card-text"><i class="fa-solid fa-c"></i>- C Language</p>
       
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
     
      <div class="card-body">
      <p class="card-text "><i class="fa-brands fa-html5"></i> HTML</p>
       
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
     
      <div class="card-body">
      <p class="card-text"><i class="fa-brands fa-css3"></i> CSS</p>
       
      </div>
    </div>
  </div>
  
</div>
    </div>
  )
}

export default Skill