//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

const prices = [7,1,5,3,6,4]

function buyAndSellStock(prices){

    let profit = 0
    let buy = prices[0]
    
    for(let i=1; i<prices.length; i++){

        if(buy < prices[i] ){

            let difference = prices[i] - buy
            if(profit < difference){

                profit = difference
            }
        }else{

            buy = prices[i]
        }
    }

    console.log(profit)
}

buyAndSellStock(prices)