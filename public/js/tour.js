

let showList = document.querySelector('#show-list')


const showsData = [
    {
        "id": 1,
        "date": "07 Oct",
        "location": "Royal Center",
        "city": "Bogota, Colombia",
        "RSVP": "https://www.bandsintown.com/artist-rsvp/17503?event_id=104607661&utm_campaign=event&utm_medium=api&app_id=WIX_the-warning&utm_source=public_api&came_from=267&spn=0&signature=ZZ5bdac0fb622210e2fa2a47bd6d56a07fab41264bb1e51940080f54df1d25f471",
        "Tickets": "https://www.viagogo.com/Concert-Tickets/Electronic/Warning-Tickets/E-152032291?PCID=partnerize_all&utm_campaign=1101l5856&utm_medium=publisher_program&utm_source=partnerize_andrewbasarab&utm_sub_medium=Content" 
    },{
        "id": 2,
        "date": "10 Oct",
        "location": "Club Chocolate",
        "city": "Recolate, Chile",
        "RSVP": "https://www.bandsintown.com/artist-rsvp/17503?event_id=104607479&utm_campaign=event&utm_medium=api&app_id=WIX_the-warning&utm_source=public_api&came_from=267&spn=0&signature=ZZ5bdac0fb622210e2fa2a47bd6d56a07fab41264bb1e51940080f54df1d25f471",
        "Tickets": "https://www.bandsintown.com/t/104607479?app_id=WIX_the-warning&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket"
    },
    {
        "id": 3,
        "date": "11 Oct",
        "location": "Teatro Vorterix",
        "city": "Buenos Aires, Argentina",
        "RSVP": "https://www.bandsintown.com/e/104713442?app_id=WIX_the-warning&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event&trigger=rsvp_going",
        "Tickets": "https://www.bandsintown.com/t/104713442?app_id=WIX_the-warning&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket"
    },
    {
        "id": 4,
        "date": "21 Oct",
        "location": "Teatro Diana",
        "city": "Guadalajara, Mexico",
        "RSVP": "https://www.bandsintown.com/e/1028439325?app_id=WIX_the-warning&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event&trigger=rsvp_going",
        "Tickets": "https://www.bandsintown.com/t/1028439325?app_id=WIX_the-warning&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket"
    },
    {
        "id": 5,
        "date": "25 Oct",
        "location": "Auditorio Pabellón M",
        "city": "Monterrey, Mexico",
        "RSVP": "https://www.bandsintown.com/e/1029207403?app_id=WIX_the-warning&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event&trigger=rsvp_going",
        "Tickets": "https://www.bandsintown.com/t/1029207403?app_id=WIX_the-warning&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket"
    },
    {
        "id": 6,
        "date": "28 Oct",
        "location": "Pepsi Center WTC",
        "city": "Mexico City, Mexico",
        "RSVP": "https://www.bandsintown.com/e/1027906013?app_id=WIX_the-warning&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event&trigger=rsvp_going",
        "Tickets": "https://www.bandsintown.com/t/1027906013?app_id=WIX_the-warning&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket"
    },
    {
        "id": 7,
        "date": "10 Nov",
        "location": "Auditorio Explanada Pachuca",
        "city": "Pachuca De Soto, Mexico",
        "RSVP": "https://www.bandsintown.com/e/104660377?app_id=WIX_the-warning&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event&trigger=rsvp_going",
        "Tickets": "https://www.bandsintown.com/t/104660377?app_id=WIX_the-warning&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket"
    },
    {
        "id": 8,
        "date": "11 Nov",
        "location": "Tecate Comuna 2023",
        "city": "San Andrés Cholula, Mexico",
        "RSVP": "https://www.bandsintown.com/e/104669721?app_id=WIX_the-warning&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event&trigger=rsvp_going",
        "Tickets": "https://www.bandsintown.com/t/104669721?app_id=WIX_the-warning&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket"
    },
    {
        "id": 9,
        "date": "18 Nov",
        "location": "Audirama El Trompo",
        "city": "Tijuana, Mexico",
        "RSVP": "https://www.bandsintown.com/e/104703276?app_id=WIX_the-warning&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event&trigger=rsvp_going",
        "Tickets": "https://www.bandsintown.com/t/104703276?app_id=WIX_the-warning&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket"
    },
    {
        "id": 10,
        "date": "24 Nov",
        "location": "Auditorio Isla Merida",
        "city": "Merida, Mexico",
        "RSVP": "https://www.bandsintown.com/e/104660402?app_id=WIX_the-warning&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event&trigger=rsvp_going",
        "Tickets": "https://www.bandsintown.com/t/104660402?app_id=WIX_the-warning&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket"
    },
    {
        "id": 11,
        "date": "25 Nov",
        "location": "Plaza De Toros Cancún",
        "city": "Cancún, Mexico",
        "RSVP": "https://www.bandsintown.com/e/104660386?app_id=WIX_the-warning&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event&trigger=rsvp_going",
        "Tickets": "https://www.bandsintown.com/t/104660386?app_id=WIX_the-warning&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket"
    },
    {
        "id": 12,
        "date": "07 Dec",
        "location": "Teatro Morelos",
        "city": "Toluca De Lerdo, Mexico",
        "RSVP": "https://www.bandsintown.com/e/104660407?app_id=WIX_the-warning&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event&trigger=rsvp_going",
        "Tickets": "https://www.bandsintown.com/t/104660407?app_id=WIX_the-warning&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket"
    },
    {
        "id": 13,
        "date": "08 Dec",
        "location": "Auditorio Josefa Ortiz De Dominguez",
        "city": "Santiago De Queretaro, Mexico",
        "RSVP": "https://www.bandsintown.com/e/104660412?app_id=WIX_the-warning&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event&trigger=rsvp_going",
        "Tickets": "https://www.bandsintown.com/t/104660412?app_id=WIX_the-warning&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket"
    },
    {
        "id": 14,
        "date": "01 Aug",
        "location": "Wacken Open Air 2024",
        "city": "Wacken, Germany",
        "RSVP": "https://www.bandsintown.com/e/104669759?app_id=WIX_the-warning&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event&trigger=rsvp_going",
        "Tickets": "https://www.bandsintown.com/t/104669759?app_id=WIX_the-warning&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket"
    },
    
    
]
loadShowsData(showsData)

function loadShowsData(showsData){
    for(let i = 0; i<=showsData.length; i++){
        let show = showsData[i]

        let showDiv = document.createElement('div')

        let dateElement = document.createElement('p')
        dateElement.classList.add('p-date')
        dateElement.textContent = show.date

        let locationElement = document.createElement('p')
        locationElement.classList.add('p-location')
        locationElement.textContent = show.location

        let cityElement = document.createElement('p')
        cityElement.classList.add('p-city')
        cityElement.textContent = show.city

        anchorDiv = document.createElement("div")
        anchorDiv.classList.add('anchor-elem')

        let rsvpElement = document.createElement('a')
        rsvpElement.classList.add('a-rsvp')
        rsvpElement.href = show.RSVP
        rsvpElement.textContent = "RSVP"
        rsvpElement.target = "_blank"

        let ticketElement = document.createElement('a')
        ticketElement.classList.add('a-ticket')
        ticketElement.href = show.Tickets
        ticketElement.textContent = "Tickets"
        ticketElement.target = "_blank"
        anchorDiv.appendChild(rsvpElement)
        anchorDiv.appendChild(ticketElement)

        showDiv.appendChild(dateElement)
        showDiv.appendChild(locationElement)
        showDiv.appendChild(cityElement)
        showDiv.appendChild(anchorDiv)
        
        showList.appendChild(showDiv)
    }
}



