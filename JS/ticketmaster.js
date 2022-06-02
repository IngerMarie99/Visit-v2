const tmKey= 'JDQCHbolGHFl04DberJqUi4DjP0H02rH';

export async function getEvents() {
    const url = 'https://app.ticketmaster.com/discovery/v2/events.json?city=[Oslo]&apikey=JDQCHbolGHFl04DberJqUi4DjP0H02rH';
    const response = await fetch(url);
    const result = await response.json();
    
    const events = result._embedded.events;

    console.log(events)

    events.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.classList.add('card_event');
        const eventCover = document.createElement('img');
        eventCover.setAttribute('src', event.images[0].url);
        eventCard.append(eventCover);

        const eventCategory = document.createElement('h4');
        eventCategory.textContent = event.classifications[0].subGenre.name;
        eventCard.append(eventCategory);
        const eventName = document.createElement('h3');
        eventName.textContent = event.name;
        eventCard.append(eventName);

        const eventsMusic = document.querySelector('.events-music');
        eventsMusic.append(eventCard)
    });
}

getEvents();