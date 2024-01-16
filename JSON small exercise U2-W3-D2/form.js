const nameInput = document.getElementById('event-name')
const eventForm = document.getElementsByClassName('form')[0]
const eventRow = document.getElementsByClassName ('row')[1]

let events = []

class savedName {
    constructor(_name) {
        this.eventName = _name
    }
}

const emptyForm = function(){
   nameInput.value = "" 
}
const emptyEventsRow = function(){

    eventRow.innerHTML = ""
}

const cardNameGenerator = function(){

emptyEventsRow();

events.forEach((ev, i) =>{
    const newCol = document.createElement('div')
          newCol.classList.add("col")
          newCol.innerHTML = `<div class="card">
          <div class="card-header">Event</div>
          <div class="card-body">
              <h5 class="card-title">${ev.eventName}</h5>
              <button class="btn btn-danger remove-button">Delite</button>
          </div>
      </div>`;
    newCol.querySelector('.remove-button').addEventListener("click", event =>{
        removeCardName(event, i)
    })
        eventRow.appendChild(newCol)
        emptyForm()
}
)
}

const removeCardName = function (event, i) {
event.target.closest(".col").remove()

const eventsAsString = localStorage.getItem('events')
const arrayOfEvents = JSON.parse(eventsAsString)
arrayOfEvents.splice(i, 1)

localStorage.setItem("events", JSON.stringify(arrayOfEvents))    
}

eventForm.addEventListener('submit', function (e) {
e.preventDefault()
const eventFromForm = new savedName(nameInput.value)
console.log(eventFromForm)
    

events.push(eventFromForm)

localStorage.setItem('events', JSON.stringify(events))

cardNameGenerator()
})

if(localStorage.getItem('events')){

    const eventsAsString = localStorage.getItem('events')
    const arrayOfEvents = JSON.parse(eventsAsString)

    events = arrayOfEvents

cardNameGenerator()
}
