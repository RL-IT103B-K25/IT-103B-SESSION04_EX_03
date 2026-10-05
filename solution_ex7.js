const basePriceSizeS = 35000;
const extraPriceSizeM = 6000;
const extraPriceSizeL = 10000;
const toppingPrice = 8000;

const tables = [
    "MLTTS",
    "SLTXM",
    "LLTTS"
];

const isGoldMember = true;

let shiftRevenue = 0;

// Duyệt từng bàn
for (let tableIndex = 0; tableIndex < tables.length; tableIndex++) {

    const orderSizes = tables[tableIndex];

    // Kiểm tra dữ liệu đầu vào
    if (orderSizes === "" || orderSizes.length % 1 !== 0) {
        console.log("Dữ liệu bàn không hợp lệ!");
        continue;
    }

    let totalDrinkAmount = 0;
    let toppingCount = 0;
    let validDrinkCount = 0;

    // Duyệt từng ký tự trong đơn hàng
    for (let orderIndex = 0; orderIndex < orderSizes.length; orderIndex++) {

        const currentCode = orderSizes[orderIndex];

        // X là món bị hủy
        if (currentCode === "X") {
            continue;
        }

        // T là topping
        if (currentCode === "T") {
            toppingCount++;
            continue;
        }

        // Dừng khi đủ 5 ly hợp lệ
        if (validDrinkCount === 5) {
            break;
        }

        if (currentCode === "S") {
            totalDrinkAmount += basePriceSizeS;
            validDrinkCount++;
        } else if (currentCode === "M") {
            totalDrinkAmount += basePriceSizeS + extraPriceSizeM;
            validDrinkCount++;
        } else if (currentCode === "L") {
            totalDrinkAmount += basePriceSizeS + extraPriceSizeL;
            validDrinkCount++;
        }
    }

    const toppingAmount = toppingCount * toppingPrice;

    let finalBillAmount = totalDrinkAmount + toppingAmount;

    // Giảm 10% cho thành viên Vàng
    if (isGoldMember === true) {
        finalBillAmount = finalBillAmount * 0.9;
    }

    // Giảm thêm 10% nếu hóa đơn trên 100.000đ
    if (finalBillAmount > 100000) {
        finalBillAmount = finalBillAmount * 0.9;
    }

    shiftRevenue += finalBillAmount;

    console.log("Bàn", tableIndex + 1);
    console.log("Tiền đồ uống:", totalDrinkAmount, "VNĐ");
    console.log("Tiền topping:", toppingAmount, "VNĐ");
    console.log("Số ly hợp lệ:", validDrinkCount);
    console.log("Tổng hóa đơn:", finalBillAmount, "VNĐ");
}

console.log("================================");
console.log("Doanh thu ca:", shiftRevenue, "VNĐ");