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