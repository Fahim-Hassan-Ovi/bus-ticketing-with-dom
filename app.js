const selectedSeatEl = document.getElementById('selected-seat');
console.log('hello');
function handleSelectSeat(event) {
    console.log(event.innerText);
    selectedSeatEl.innerHTML = `
    <li class="text-base font-normal flex justify-between">
    <span>${event.innerText}</span>
    <span>Economy</span>
    <span>550</span>
    </li>

    `
};