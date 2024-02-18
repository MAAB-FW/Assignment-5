const allSeats = document.getElementById('allSeats')
const seatButton = document.getElementsByClassName('seatButton')

let seatCount = 0
for (const seat of seatButton) {
    seat.addEventListener('click', function (e) {
        if (seatCount < 4) {
            seat.classList.add('btnBgColorChanged')
            seat.classList.add('text-white')
            seat.classList.remove('bg-[#F7F8F8]')
            seat.setAttribute('disabled', '')

            const selectedSeatCount = getInnerTextValueFromId('selected-seat-count')
            seatCount = selectedSeatCount + 1
            setInnerTextWithIdAndValue('selected-seat-count', seatCount)

            const remainingSeat = getInnerTextValueFromId('remaining-seat')
            const updatedRemainingSeat = remainingSeat - 1
            setInnerTextWithIdAndValue('remaining-seat', updatedRemainingSeat)
        }
        else {
            alert("You can't select more seat!!!")
        }
    })
}

