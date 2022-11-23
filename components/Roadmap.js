const Roadmap = () => {

  return (
    <div id="Contact" className="xp-container3">

    <form>
<h1>Contact Us</h1>
 
	      <div class="field name-box">
		        <input type="text" id="name" placeholder="Who Are You?"/>
        	
	      </div>

	      <div class="field email-box">
		        <input type="text" id="email" placeholder="name@email.com"/>
		      
	      </div>

	      <div class="field msg-box">
		        <textarea id="msg" rows="4" placeholder="Your message goes here..."/>
		    
	      </div>

	      <input class="button" type="submit" value="Send" />
  </form>
</div>
  )
}

export default Roadmap