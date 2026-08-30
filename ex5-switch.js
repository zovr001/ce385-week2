function getMenuPrice(menu) {
    switch (menu) {
        case "ผัดไทย":
        case "ข้าวผัด":
        case "ข้าวมันไก่":
        case "ข้าวหมูแดง":
            // 4 เมนูนี้ราคา 50 บาท
            return 50;

        case "ต้มยำกุ้ง":
            return 120;

        default:
            return 0;
    }
}

function getSizeMultiplier(size) {
    switch (size) {
        case "ธรรมดา":
            return 1;
        case "พิเศษ":
            return 1.5;
        case "จัมโบ้":
            return 2;
        default:
            return 1;
    }
}

const orders = [
    { menu: "ผัดไทย", size: "พิเศษ", qty: 2 },
    { menu: "ข้าวผัด", size: "ธรรมดา", qty: 1 },
    { menu: "ต้มยำกุ้ง", size: "จัมโบ้", qty: 1 },
    { menu: "ข้าวมันไก่", size: "ธรรมดา", qty: 2 },
    { menu: "เมนูอื่น ๆ", size: "พิเศษ", qty: 1 }
];

let total = 0;

for (const order of orders) {
    const price = getMenuPrice(order.menu);
    const multiplier = getSizeMultiplier(order.size);

    if (price === 0) {
        console.log(`${order.menu} → ไม่พบเมนู`);
        continue;
    }

    const itemTotal = price * multiplier * order.qty;
    total += itemTotal;

    console.log(
        `${order.menu} (${order.size}) x ${order.qty} = ${itemTotal} บาท`
    );
}

console.log(`ราคารวมทั้งหมด = ${total} บาท`);