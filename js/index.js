const priceList = {
    cocacola: 2,
    teVerde: 2.3,
    teOrganico: 5.9,
    pan: 1.1,
    queso: 5,
    chocolate: 7.3,
    curasan: 4,
    galleta: 1,
    albaricoque: 0.6,
    albaricoqueDocena: 3.5,
    berenjena: 0.5,
}
let counter = 0;
const convertIdToValidString = value => {
    let str = value;
    let position = str.indexOf('0');
    return str.substring(0, position);
}
const addPriceWhenAddToBasket = product => {
    counter += priceList[product];
    document.getElementById('amountBasketTotal').innerHTML = counter.toFixed(2);
    document.getElementById('amountBasketUnidad').innerHTML = priceList[product];
}
const substractPriceWhenRemovedFromBasket = product => {
    counter -= priceList[product];
    document.getElementById('amountBasketTotal').innerHTML = counter.toFixed(2);
    document.getElementById('amountBasketUnidad').innerHTML = 0;
}
const drag = ev => {
    ev.dataTransfer.setData("text", ev.target.id);
}
const dropBasket = ev => {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    let item = document.getElementById(data);
    addPriceWhenAddToBasket(convertIdToValidString(data));
    document.getElementById("list").appendChild(item);
}
const dropShelf = ev => {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    let item = document.getElementById(data);
    substractPriceWhenRemovedFromBasket(convertIdToValidString(data));
    ev.target.appendChild(item);
}
const allowDrop = ev => {
    ev.preventDefault();
}