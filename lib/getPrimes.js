let getPrimes = (n) => {
	if(n % 2 === 0) return n;
	for(var i=3; i<= Math.sqrt(n); i=i+2){
		if(n % i === 0){
			return n;
		}
	}
	return n;
}
  
  }

getPrimes(7,11)