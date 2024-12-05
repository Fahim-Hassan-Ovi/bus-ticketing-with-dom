// target
const selectedSeatEl = document.getElementById('selected-seat');
const totalBookedEl = document.getElementById('total-booked');
const availableSeatEl = document.getElementById('available-seat')
const totalPriceEl = document.getElementById('total-price');

let selectedSeat = [];
let totalPrice = 0;

function handleSelectSeat(event) {
    // console.log(event.innerText);
    event.classList.add('bg-primary');
    event.classList.add('text-white');
    selectedSeat.push(event.innerText);
    totalBookedEl.innerText = selectedSeat.length;

    // decrease available seat
    const availableSeatValue = parseFloat(availableSeatEl.innerText);
    const newAvailableSeatValue = availableSeatValue - 1;
    availableSeatEl.innerText = newAvailableSeatValue;


    selectedSeatEl.innerHTML += `
    <li class="text-base font-normal flex justify-between">
    <span>${event.innerText}</span>
    <span>Economy</span>
    <span>550</span>
    </li>

    `
    // update total price
    totalPrice += 550;
    totalPriceEl.innerText = totalPrice.toFixed(2);

    // console.log(selectedSeat);
};