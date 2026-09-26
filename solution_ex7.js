const basePriceSizeS = 35000;
const extraPriceSizeM = 6000;
const extraPriceSizeL = 10000;
const toppingPrice = 8000;

const orderSizes = "MLXSM";
const toppingCount = 2;
const isGoldMember = true;

let totalDrinkAmount = 0;

for (let orderIndex = 0; orderIndex < orderSizes.length; orderIndex++) {
    const currentDrinkSize = orderSizes[orderIndex];
    if (currentDrinkSize === "X") {
        continue;
    }
    if (currentDrinkSize === "S") {
        totalDrinkAmount += basePriceSizeS;
    } else if (currentDrinkSize === "M") {
        totalDrinkAmount += basePriceSizeS + extraPriceSizeM;
    } else if (currentDrinkSize === "L") {
        totalDrinkAmount += basePriceSizeS + extraPriceSizeL;
    }
}

const toppingAmount = toppingCount * toppingPrice;
let finalBillAmount = totalDrinkAmount + toppingAmount;
if (isGoldMember === true) {
    finalBillAmount = finalBillAmount * 0.9;
}

console.log("Tổng tiền đồ uống:", totalDrinkAmount, "VNĐ");
console.log("Tiền topping:", toppingAmount, "VNĐ");
console.log("Tổng tiền hóa đơn:", finalBillAmount, "VNĐ");