const allSeats = document.getElementById('allSeats')
const seatButton = document.getElementsByClassName('seatButton')
const appendedSection = document.getElementById('appended-section')

let seatCount = 0
for (const seat of seatButton) {
    seat.addEventListener('click', function (e) {
        if (seatCount < 4) {
            seat.classList.add('btnBgColorChanged')
            seat.classList.add('text-white')
            seat.classList.remove('bg-[#F7F8F8]')
            seat.setAttribute('disabled', '')

            seatCount = seatCount + 1
            setInnerTextWithIdAndValue('selected-seat-count', seatCount)

            const remainingSeat = getInnerTextValueFromId('remaining-seat')
            const updatedRemainingSeat = remainingSeat - 1
            setInnerTextWithIdAndValue('remaining-seat', updatedRemainingSeat)

            const div = document.createElement('div')
            div.classList.add("my-2", "flex", "justify-between", "text-[rgba(3,7,18,0.6)]")


            const p1 = document.createElement('p')
            const seatText = seat.innerText
            p1.innerText = seatText;

            const p2 = document.createElement('p')
            p2.innerText = 'Economy';

            const p3 = document.createElement('p')
            p3.innerText = 550;
            div.append(p1, p2, p3)
            appendedSection.appendChild(div)
        }
        else {
            alert("You can't select more seat!!!")
        }
    })
}

