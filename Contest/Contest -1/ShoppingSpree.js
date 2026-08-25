// problem link: https://code-lab-ph.vercel.app/labs/code-lab/contests/dc-1/shopping-spree

function calculateRemainingMoney(totalMoney, cakeCost, donutCost) {
    // TODO: Implement the function
    let reminingAfterBuyCake = totalMoney - cakeCost;
    if (reminingAfterBuyCake <= 0) return reminingAfterBuyCake;
    return reminingAfterBuyCake % donutCost;
}