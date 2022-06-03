
export const activities = [
    {
        category: 'Mat og drikke',
        id:'011',
        name: 'Olivia Østbanehallen',
        adress: 'Jernbanetorget 1, 0154 Oslo',
        lat: 59.9108712,
        lon: 10.7507348,
        info: 'Olivia Østbanehallen. Olivias ambisjon er å by på de beste smakene fra Italia. Alle lokalene henter inspirasjon fra italienske favorittbyer.',
        url: "https://premium.vgc.no/v2/images/39b20dc6-f018-4856-a23d-a49c7095ea39?fit=crop&format=auto&h=1366&w=2048&s=b878ad4e261613f8d042eda4ed4fa3bc2fc5fe3e"
    },

    {
        category: 'Mat og drikke',
        id:'012',
        name: 'Johnny Rockets',
        adress: 'Vitaminveien 11, 0485 Oslo',
        lat: 59.9455056,
        lon: 10.7778049,
        info: 'Johnny Rockets er en internasjonal diner-restaurant, som kom til Norge i 2018. Vi serverer deg de beste burgerne, nydelige fries og deilige milkshakes.',
        url: "https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/2020-09/Jrockets.jpg?itok=yAQ_aIKg"
    },

    {
        category: 'Action',
        id:'021',
        name: 'Kollensvevet',
        adress: 'Kongeveien 5, 0787 Oslo',
        lat: 59.962628,
        lon: 10.6662845,
        info: 'Kollensvevet byr på en unik opplevelse av Holmenkollen slik som skihopperne opplever den, men trygt festet til en zipline. Det er ingen aldersgrense!',
        url: "https://assets.simpleviewcms.com/simpleview/image/fetch/c_limit,h_1200,q_75,w_1200/https://media.newmindmedia.com/TellUs/image/%3Ffile%3DKollensvevet-zipline_5_1454231103.jpg%26dh%3D533%26dw%3D800%26cropX%3D0%26cropY%3D0%26cropH%3D2400%26cropW%3D3600%26t%3D4"
    },

    {
        category: 'Action',
        id:'022',
        name: 'The Escape Games Oslo',
        adress: 'Kirkegata 20, 0153 Oslo',
        lat: 59.9107759,
        lon: 10.7444445,
        info: 'The Escape Game offers immersive rooms where individuals can experience 60-minute adventures. Think you can escape the room? Find an escape game near you!',
        url: "https://www.escapegames.no/images/games/game-steam-big.jpg"
    },

    {
        category: 'Museum',
        id:'031',
        name: 'Munch',
        adress: 'Edvard Munchs Plass 1, 0194 Oslo',
        lat: 59.9061668,
        lon: 10.7554186,
        info: 'Et levende kunstmuseum skreddersydd for store opplevelser. Opplev Edvard Munch, internasjonale utstillinger og samtidskunst, i tillegg til musikk!',
        url: "https://upload.wikimedia.org/wikipedia/commons/5/56/MUNCH_Museum_front_%282020%29_4.jpg"
    },

    {
        category: 'Museum',
        id:'032',
        name: 'Teknisk Museum',
        adress: 'Kjelsåsveien 143, 0491 Oslo',
        lat: 59.966424,
        lon: 10.7827069,
        info: 'Norsk Teknisk Museum forvalter samlinger fra et bredt spekter av norsk og internasjonal industri, kommunikasjon, vitenskap og medisin.',
        url: "https://res.cloudinary.com/dm1881/image/upload/a_ignore,c_lpad,w_980/v1544090987/bzzwhjrvcwwdypldsihs.jpg"
    },

    {
        category: 'Shopping',
        id:'041',
        name: 'Storo Storsenter',
        adress: 'Vitaminveien 7-9, 0485 Oslo',
        lat: 59.9468383789063,
        lon: 10.7753944396973,
        info:'130 butikker, spisesteder og tjenester. Velkommen til oss. Se kampanjer, tilbud og oversikt over alle butikker og spisesteder. Åpent 10-21. Stort Parkeringshus. Gratis WIFI. Inspirasjon.',
        url: "https://tellusdmsmedia.newmindmedia.com/wsimgs/Storo-Storsenter_sykkelparkering_1779198964.jpg[ProductImage]"
    },
    {
        category: 'Shopping',
        id:'042',
        name: 'CC Vest',
        adress: 'Lilleakerveien 16, 0283 Oslo',
        lat: 59.9174041748047,
        lon: 10.6360511779785,
        info:'CC Vest er et kjøpesenter på Lilleaker i Oslo. Det har et bredt utvalg av butikker, 90 totalt, i tillegg til tjenester som helsehjørne, dyrlege og mer.',
        url: "https://upload.wikimedia.org/wikipedia/commons/7/76/CC_Vest_%28august_2019%29.jpg"
    },
]
console.log(activities)

export function getActivities() {

    console.log('get activities')
    const activitiesCard = document.getElementById("activities");

    activities.forEach(activity => {
        const activityCard = document.createElement('div');
        activityCard.classList.add('card');
        const activityCover = document.createElement('img');
        activityCover.setAttribute('src', activity.url);
        activityCard.append(activityCover);

        const activityCategory = document.createElement('h4');
        activityCategory.textContent = activity.category;
        activityCard.append(activityCategory);
        const activityName = document.createElement('h3');
        activityName.textContent = activity.name;
        activityCard.append(activityName);
        activitiesCard.append(activityCard)
    });

}

