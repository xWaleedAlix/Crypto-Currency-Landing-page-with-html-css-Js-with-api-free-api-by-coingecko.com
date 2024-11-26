var btc=document.getElementById('bitcoin');
var eth=document.getElementById('ethereum');
var doge=document.getElementById('dogecoin');


const options = {
    'async':true,
    'scrossDomain':true,
    'url':'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd',
    method: 'GET',
    headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-5mT3ei2PGMh7xtEVhQSeJm6r'}
  };
$.ajax(options).done(function(response){
    btc.innerHTML=response.bitcoin.usd;
    eth.innerHTML=response.ethereum.usd;
    doge.innerHTML=response.dogecoin.usd;
})
    
    