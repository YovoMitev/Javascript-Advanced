function sortTickets(ticketsArr,sortCriteria) {

    class Tickets{
        constructor(dest,price,status){
            this.destination = dest;
            this.price = Number(price);
            this.status = status;
        }

        static sort(tickets,criteria){
            switch (criteria){
                case 'destination':return tickets.sort((t1,t2) => t1.destination.localeCompare(t2.destination));
                case 'status': return tickets.sort((t1,t2) => t1.status.localeCompare(t2.status));
                case 'price': return tickets.sort((t1,t2) => t1.price-t2.price);
            }
        }
    }
    let result = [];
    let currnetTicket;
    for(let ticket of ticketsArr){
        let [dest,price,stat] = ticket.split('|');
        currnetTicket = new Tickets(dest,price,stat);
        result.push(currnetTicket);
    }
    return Tickets.sort(result,sortCriteria);
}

console.log(sortTickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'price'
));