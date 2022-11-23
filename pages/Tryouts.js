/* eslint-disable @next/next/no-html-link-for-pages */
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'



import { useEffect, useState } from 'react'

import { Upload } from "@aws-sdk/lib-storage";
import { S3Client } from "@aws-sdk/client-s3";
import Submission from '../components/submission';





export default function CoverJam() {





   const [deadline, setDeadline] =useState(false)
   const [days, setDays] = useState(0)
   const [hours, setHours] = useState(0)
   const [minutes, setMinutes] = useState(0)
   const [seconds, setSeconds] = useState(0)

   useEffect(() => {

    const target = new Date("12/17/2022 00:00:00")
    const subTarget = new Date("10/20/2022 12:00:00")
    // const target = new Date("10/18/2022 20:00:00")
      const interval = setInterval(() => {
      const now = new Date()
      const difference = target.getTime() - now.getTime()

      const d = Math.floor(difference / (1000 * 60 * 60 * 24 ))
      setDays(d)

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24 )) / (1000* 60 * 60)
      );
      setHours(h)

      const m = Math.floor(
        (difference % (1000 * 60 * 60 )) / (1000* 60 )
      );
      setMinutes(m)

      const s = Math.floor(
        (difference % (1000 * 60)) / 1000)
      setSeconds(s)

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0){
        setDeadline(true);
      }

      }, 1000)

      return () => clearInterval(interval)
   }, [])

  

   

 

  return (
    <div className="CoverJam">
      <Head>
        <title>The Metaverse Song Cover Jam | D3G3N </title>
        <meta name="description" content="Using blockchain technology, we will showcase YOUR ORIGINAL WORK as the Cover Art of the OFFICIAL MINT release of THE METAVERSE SONG!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav class="navBarContainer blur">
  <div class="navBarMenuContainer">
    
      <div class="navBar-NavigationMenu">

      <div class="navBar-LogoContainer"> 
      <a href="/"><img class="navBar-Logo" src="/imgs/Logo.png" alt="Logo" /></a>
      </div>

      <div class="navbar-Links">
            
{/*         
            <a href="#Info">Information</a>
            <a href="#Theme" >Theme</a>
            <a href="#GetStarted">Get Started</a>
            <a href="#Rules">Rules</a>
            <a href="#ArtSpecs" >Art Specs</a>
            <a href="#Submission">Submit Artwork</a> */}
     
            </div>

  </div>
    </div>
    <button  class="navBar-ConnectWalletBase">Connect</button>

  </nav>

        <div id="Top"  className='sectionMargin'></div>
      <main className={styles.main}>
  
      <div className='sectionMargin'></div>
      <a href="/">
      <img className='mheader-logo2' src='/imgs/logo.png' alt="logo"/></a>
        <img className="logo" src='/imgs/MetaLogo.png' alt=""/>

        {/* <p><code> Artist : JleeWalls </code><br/>
      <code> Producer : JleeWalls </code><br/>
        <code> Engineer : Freequency </code>
        <br/><br/><br/>
        </p> */}

        {deadline ? ( <h1> Submissions Closed </h1> ) : (

        <div className='timer-wrapper'>
          <div className='timer-inner'>
            <div className='timer-segment'>
              <p className='time'>{days}</p>
              <p className='label'>Days</p>
            </div>
            <div className='timer-segment'>
              <p className='time'>{hours}</p>
              <p className='label'>Hours</p>
            </div>
            <div className='timer-segment'>
              <p className='time'>{minutes}</p>
              <p className='label'>Minutes</p>
            </div>
            <div className='timer-segment'>
              <p className='time'>{seconds}</p>
              <p className='label'>Seconds</p>
            </div>
          </div>
        </div>

        )}
{/* <div className='sectionMargin'></div> */}
{/* <a  id="Info" href="#Submission" ><button> Start Submission</button></a> */}

{/* <div  className='sectionMargin'></div> */}

        {/* <img  className="logo" src='/imgs/Info.png' alt=""/> */}



        {/* <p id="Theme"  className="Details"> 
        <code>Presented by D3G3N</code> <br/> <br/>
        GM & Hello everyone! We are so happy and grateful that you have chosen to collaborate with us! <br/> <br/>

        For her own personal enjoyment, JLee Walls wrote the Metaverse Song utilizing touch screen technology and GarageBand for free on her iPhone. As most singers and songwriters do, she would refer to it as her diary entry.   <br/> <br/>

Since earlier this year, morale in the 1/1 artists space has declined, and the bear market has begun to show itself. It was JLee&apos;s determination to uplift others through the narrative and empathy infused lyrics of The Metaverse Song that led her to begin performing the song. <br/> <br/>

 Over the last several months, it has evolved into the version you have come to know and love today. Its LIVE guitar version was written way late into the night in a degen space. <br/> <br/>

 JLee felt like it was a meaningful way to show her love and appreciation for ALL of her brand-new frens and fellow creatives in the space because of all the support and love she has received on Twitter. By collaborating, we would INCLUDE their works on The Metaverse Song&apos;s official drop. <br/> <br/> We would attach it to the ERC Token, render it, and mint it onto the Ethereum blockchain as a rarity trait.  <br/> <br/>

         
        
        </p> */}

        {/* <img className="logo" src='/imgs/THEME.png' alt=""/> */}

        {/* <p id="GetStarted" className="Details"> 
        <code>ART OF THE METAVERSE</code> <br/> <br/>
        Bring your art to life by creating a world that highlights it<br/> <br/>
    </p> */}
        {/* <img  className="logo" src='/imgs/START.png' alt=""/> */}


      {/* <p  id="Rules" className="Details">
      Using blockchain technology, we will showcase YOUR ORIGINAL WORK as the Cover Art of the OFFICIAL MINT release of THE METAVERSE SONG! 
<br/> <br/>

Each cover art will have a &apos;The Metaverse Song&apos; title, and the Metaverse song will be attached and rendered with each non-fungible token. <br/> <br/>

A total of 10,000 versions of the Metaverse Song will be generated from 300 1 of 1 Artist Submissions from our Twitter NFT Community! <br/> <br/>

      </p> */}



      {/* <img  className="logo" src='/imgs/rules.png' alt=""/> */}


<p className="Details">

<strong>Tryouts open:</strong> <br/> December 17th at 12:00 PM MST <br/> <br/>
{/* <strong>The submissions closing:</strong> <br/> October 31st at 12:00 PM MST <br/> <br/> */}

</p>

{/* <h2>&#9989; Allowed</h2> */}
{/* <ul className='list'>
  <li className='list'> &#9989; Hand-Drawn - Polished Version </li>
  <li className='list'> &#9989; Digital Illustration - Polished Version  </li>
  <li className='list'> &#9989; 2D Renderings  </li>
  <li className='list'> &#9989; 3D Renderings  </li>
  <li className='list'> &#9989; AI-Generated Artwork will be allowed in this submission IF you have permissions from the platform/site used to create the AI Artworks,which must be provided, OR your AI image has been manually polished by YOU, the ARTIST</li>
</ul> */}

{/* <h2>&#9940; Not Allowed</h2> */}
{/* <ul  id="ArtSpecs" className='list'>
  <li className='list'> &#9940; Copyrighted Images </li>
  <li className='list'> &#9940; No Logos or other company related branding in submission  </li>
  <li className='list'> &#9940; 3D assets purchased from 3D websites without credits </li>
  <li className='list'> &#9940;  Anything derogatory towards any race, gender, culture, etc.. </li>
  <li className='list'> &#9940;  Artworks that have already been minted onto the Blockchain, or posted and currently visible on any social platforms that will come up in a reverse image search.  </li>

</ul> */}

{/* <div className='sectionMargin'></div> */}


{/* <div className='sectionMargin'></div> */}



    {/* <Submission/> */}
       
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="#Top"
        >
        Top of Page
        </a>
      </footer> */}
    </div>
  )
}


  
