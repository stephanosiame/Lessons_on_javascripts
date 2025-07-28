var shoes = {
    pairPrice : 1000,
    taxPair : 2.5,
    totalPricePair : function (){
        var costPerPair = this.pairPrice * this.taxPair;
        console.log('Total Price: ', costPerPair)
    }
}
shoes.totalPricePair()

var jordan = {
    pairPrice : 2000,
    taxPair: 2.5,
    totalPricePair : function (){
        var costPerPair = this.pairPrice * this.taxPair;
        console.log('Total Price: ', costPerPair)
    }
}
jordan.totalPricePair()