

const Submission = () => {


    const upload = (file)=>{
        var file = (file.target.files[0]);
     
       
     
         const target = { Bucket:"metaverse-song", Key:file.name, Body:file };
         const creds = {accessKeyId: "AKIA4RBVFX7O2LODMQGY", secretAccessKey: "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"  }
        try {
         const parallelUploads3 = new Upload({
           client: new S3Client({region:"us-west-2", credentials: creds }),
           acl: 'private',
           params: target,
           leavePartsOnError: false, // optional manually handle dropped parts
         });
       
         parallelUploads3.on("httpUploadProgress", (progress) => {
           console.log(progress);
         });
       
         parallelUploads3.done();
       } catch (e) {
         console.log(e);
       }
     
     
       }


  return (
    <div className="FormContainer">

<img id="Submission" className="logo" src='/imgs/Submit.png' alt=""/>
<div className='sectionMargin'></div> 

    <form className="formStyles center" action="https://formsubmit.co/AmbienceXYZ@gmail.com" method="POST">
       <input type="hidden" name="_subject" value="CoverJAM! - New SIGN UP"/>
       <input type="text" name="Artist Name"  placeholder="Artist Name" required/>

       <p>** please submit the public address 0x12345678..1110 <br/> not your ens domain name **<br/> <br/>
</p>
       <input type="text" name="Artist Metamask Wallet" placeholder="Artist Metamask Wallet" required/>
       <input type="text" name="Twitter"  placeholder="Artist Twitter Handle" required/>
       <input type="email" name="email"  placeholder="Email Address" required/>
       {/* <input type="email" name="email-verify" pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" placeholder="Verify Email Address" required/> */}
       
    


       
       <input type="hidden" name="_autoresponse" value="Thank you for signup! Here's your copy!"/>
       
       
       
       
       <div>

       <label><h1>Are you the artist?</h1></label>
      
           
       <select name="user" id="userID" size="1">
         <option>Yes</option>
         <option>No</option>

       </select>
         
       <label><h1>Art Style</h1></label>
                 <select name="ArtStyle" id="ArtStyle" multiple>
                   <option value="Hand Drawn">Hand Drawn</option>
                   <option value="Digital Illustration">Digital Illustration</option>
                   <option value="2D Graphics">2D Graphics</option>
                   <option value="3D Render">3D Render</option>
                   <option value="AI Generated">AI Generated</option>
       </select>


       <h1>Upload Cover Art</h1>

      
             {/* <p>REQUIRED <br/><br/> File Name Should be labeled as: <br/><br/> <strong>ArtistName-TwitterHandle.png</strong> <br/><br/> <strong>Example:</strong> Freequency-AmbienceXYZ.png <br/><br/> This ensures that your file will not be overwritten due to same file name</p> */}


<div className='sectionMargin'></div>



             <img  className="logo" src='/imgs/ART.png' alt=""/>

<h1>Final Output</h1>
<p className='Details'>
<strong>Cover Art Canvas Size:</strong> <br/>w: 1,600px / h: 1,600px <br/> <br/>
<strong>DPI:</strong> <br/> 72<br/> <br/>
<strong>File Type:</strong> <br/> PNG<br/> <br/>
<strong>Color Mode:</strong> <br/> RGB<br/> <br/>




</p>

<div className='coverEntry'>
 <div className='uploadCSS'>
<input className="uploadInput" type="file"  onChange={upload}  required/>
</div>
<input   type="text" name="File Name" placeholder='Confrim File Name + .(png or jpg)' required/>
</div>
<label><p>This box signifies that you are the ORIGINAL creator of the artwork and have created it based on the following art specs above.</p>  

             <p>In accordance with the Art Specs, D3G3N is fully authorized to use my artwork in the Metaverse Song Cover Art Collaboration Project.</p></label>
             <p>I understand my artwork will NOT be used if it does NOT meet the required ART SPECS</p>
             <input
               type="checkbox"
               id="subscribeNews"
               name="Agreement"
               value="I agreed that I allow D3G3N to use my cover art for the Metaverse Song Cover NFT Drop"
               required />
  
       </div>

       
      
            <button type="submit">Send</button>
            
   </form>
       </div>
  )
}

export default Submission