let totalAmount = 0; // 合計金額
const limit = 100000000000000; // 100兆円

function addItem() {
    let name = document.getElementById("itemName").value;
    let price = Number(document.getElementById("itemPrice").value);
    let quantity = Number(document.getElementById("itemQuantity").value);

    if (!name || price <= 0 || quantity <= 0) {
        alert("正しい商品名、価格、個数を入力してください");
        return;
    }

    let itemTotal = price * quantity;
    totalAmount += itemTotal;

    if (totalAmount > limit) {
        alert("100兆円を超えました！ゲームオーバー！");
        totalAmount -= itemTotal; // 超えた分をキャンセル
        return;
    }

    let listItem = document.createElement("li");
    listItem.textContent = `${name} x ${quantity}個 - ${itemTotal}円`;
    document.getElementById("shoppingList").appendChild(listItem);

    document.getElementById("totalAmount").textContent = totalAmount;

    // 入力欄をリセット
    document.getElementById("itemName").value = "";
    document.getElementById("itemPrice").value = "";
    document.getElementById("itemQuantity").value = "";
    
    const number = 1234567;
const formatted = number.toLocaleString();  // "1,234,567" が得られる
console.log(formatted);






