// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let res = {
    	"H" : 0,
    	"Q" : 0,
    	"D" : 0,
    	"N" : 0,
    	"P" : 0
    };

    if(currency>10000){
        return {error: "You are rich, my friend! We don't have so much coins for exchange"}
    }else if(currency<1){
        return {};
    }else{
    	res["H"] = Math.floor(currency / 50);
    	currency %= 50;
    	res["Q"] = Math.floor(currency / 25);
    	currency %= 25;
    	res["D"] = Math.floor(currency / 10);
    	currency %= 10;
    	res["N"] = Math.floor(currency / 5);
    	currency %= 5;
    	res["P"] = Math.floor(currency);

    	for (k in res){
            if(res[k]===0){
                delete res[k];
            }
        }
    	return res;
	}
}
