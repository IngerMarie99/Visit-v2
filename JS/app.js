import { getTime } from "./getTime.js";
import {hamburgerMenu} from "./hamburgerMenu.js";
import {getMap} from "./mapbox.js";
import { getEvents } from  "./ticketmaster.js";
import { activities, getActivities} from "./activities.js";
getTime();
hamburgerMenu();
getMap();
getEvents();
getActivities();
console.log (activities);

// SERVICE WORKER with errors
const registerServiceWorker = async () => {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register(
          '../sw.js',
          {
            scope: '/',
          }
        );
        if (registration.installing) {
          console.log('Service worker installing');
        } else if (registration.waiting) {
          console.log('Service worker installed');
        } else if (registration.active) {
          console.log('Service worker active');
        }
      } catch (error) {
        console.error(`Registration failed with ${error}`);
      }
    }
  };
  registerServiceWorker(); //invoke

//Her ligger localStorage som du trenger for å lagre objekter
  const toSave = 'Oslo';
  localStorage.setItem('lastvisitcity', toSave)

  const lastCity = localStorage.getItem('lastvisitcity');
  console.log(lastCity)