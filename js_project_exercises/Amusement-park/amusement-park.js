//Create a new visitor in amusement park
function createVisitor(name, age, ticketId){
    return {
            name: name,
            age : age,
            ticketId: ticketId 
        };
}

// revoke ticket 
function revokeTicket(visitor){
    visitor.ticketId =null;
    return  visitor;
}

//check the status of ticket
function ticketStatus(tickets, ticketId){
    if(!(ticketId in tickets)){
        return "Unknown Ticket ID";
    }else if(tickets[ticketId] === null){
        return "Not Sold";
    }else{
        return `Sold to ${tickets[ticketId]}`;
    }
}

//Improve the ticket status response
function simpleTicketStatus(tickets, ticketId){
    if(ticketId in tickets && tickets[ticketId]){
        return tickets[ticketId];
    }else{
        return 'Invalid Ticket !!!';
    }
}

//Determine version of term and condition

function gtcVersion(version){
    return visitor.gtc?.version;
}