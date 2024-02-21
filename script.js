function modalAppear(a, b) {
    document.getElementById(a).classList.add('hidden');
    document.getElementById(b).classList.remove('hidden');
}
function buyAgain(a, b) {
    document.getElementById(a).classList.remove('hidden');
    document.getElementById(b).classList.add('hidden');
}
let availSeatCount = 8, boughtSeatCount = 0;
function buyTicket(seatId, availSeat, boughtSeat, elementAdd, totalFare, grandTotal, nextButton) {
    if (boughtSeatCount < 4) {
        document.getElementById(seatId).classList.add('bg-green-500', 'text-white');
        availSeatCount--;
        boughtSeatCount++;
        document.getElementById(availSeat).innerText = availSeatCount;
        document.getElementById(boughtSeat).innerText = boughtSeatCount;
        let parentDiv = document.getElementById(elementAdd);
        let newDiv = document.createElement('div');
        let ptag1 = document.createElement('p');
        ptag1.textContent = 'C1';
        newDiv.appendChild(ptag1);
        let ptag2 = document.createElement('p');
        ptag2.textContent = 'Economy';
        newDiv.appendChild(ptag2);
        let ptag3 = document.createElement('p');
        ptag3.textContent = '550';
        newDiv.appendChild(ptag3);
        parentDiv.appendChild(newDiv);
        newDiv.classList.add('flex', 'justify-between');
        const fare = boughtSeatCount * 550;
        document.getElementById(totalFare).innerText = fare;
        document.getElementById(grandTotal).innerText = fare;
        document.getElementById(nextButton).disabled = false;
    }
    else
        document.getElementById(seatId).classList.add('bg-gray-400', 'text-white');
}
let val = '';
function buttonEnable(inputCoupon, applyButton) {
    val = document.getElementById(inputCoupon).value;
    if (val === 'NEW15' || val === 'Couple 20')
        document.getElementById(applyButton).disabled = false;
    else
        document.getElementById(applyButton).disabled = true;
}
function lastCal(applyButton, grandTotal) {
    if (document.getElementById(applyButton).disabled === false) {
        if (val === 'NEW15')
            document.getElementById(grandTotal).innerText = boughtSeatCount * 550 * .85;
        else if (val === 'Couple 20')
            document.getElementById(grandTotal).innerText = boughtSeatCount * 550 * .80;
        else
            document.getElementById(grandTotal).innerText = boughtSeatCount * 550;
    }
    else
        document.getElementById(grandTotal).innerText = boughtSeatCount * 550;
}