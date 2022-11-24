import React, {useState} from 'react'
import {ethers} from 'ethers'



const NavBar = () => {

//   const [errorMessage, setErrorMessage] = useState(null);
// 	const [defaultAccount, setDefaultAccount] = useState(null);
// 	const [userBalance, setUserBalance] = useState(null);
// 	const [connButtonText, setConnButtonText] = useState('Connect');

//   const connectWalletHandler = () => {
// 		if (window.ethereum && window.ethereum.isMetaMask) {
// 			console.log('MetaMask Here!');

// 			window.ethereum.request({ method: 'eth_requestAccounts'})
// 			.then(result => {
// 				accountChangedHandler(result[0]);
// 				setConnButtonText('Wallet Connected');
// 				getAccountBalance(result[0]);
// 			})
// 			.catch(error => {
// 				setErrorMessage(error.message);
			
// 			});

// 		} else {
// 			console.log('Need to install MetaMask');
// 			setErrorMessage('Please install MetaMask browser extension to interact');
// 		}
// 	}

//   // update account, will cause component re-render
// 	const accountChangedHandler = (newAccount) => {
// 		setDefaultAccount(newAccount);
// 		getAccountBalance(newAccount.toString());
// 	}

// 	const getAccountBalance = (account) => {
// 		window.ethereum.request({method: 'eth_getBalance', params: [account, 'latest']})
// 		.then(balance => {
// 			setUserBalance(ethers.utils.formatEther(balance));
// 		})
// 		.catch(error => {
// 			setErrorMessage(error.message);
// 		});
// 	};

// 	const chainChangedHandler = () => {
// 		// reload the page to avoid any errors with chain change mid use of application
// 		window.location.reload();
// 	}


	// listen for account changes
	// window.ethereum.on('accountsChanged', accountChangedHandler);

	// window.ethereum.on('chainChanged', chainChangedHandler);


  return (
    <nav class="navBarContainer blur">
  <div class="navBarMenuContainer">
    
      <div class="navBar-NavigationMenu">

      <div class="navBar-LogoContainer"> 
      <a href="/"><img class="navBar-Logo" src="/imgs/Logo.png" alt="Logo" /></a>
      </div>

      <div class="navbar-Links">
          {/* <a href="/"><h3>Events</h3></a>
          <a href="/"><h3>Articles</h3></a>
          <a href="/"><h3>Merch</h3></a>
          <a href="/"><h3>About Us</h3></a>
          <a href="/"><h3>Contact</h3></a> */}
      </div>

  </div>
    </div>
    {/* <div class="navBar-ConnectWalletBase">
      <div class="navBar-Smart">
      <div className='accountDisplay'>
    <span><strong>Account: </strong> {defaultAccount}</span>
    </div>
    <div className='balanceDisplay'>
    <span><strong>Balance: </strong>{userBalance}</span>
    </div>
    <button onClick={connectWalletHandler}>{connButtonText}</button>
   

    </div>
    </div> */}
	  {/* <a href="#Contact"><button class="navBar-ConnectWalletBase">Contact Us</button></a> */}
  </nav>
  )
}

export default NavBar