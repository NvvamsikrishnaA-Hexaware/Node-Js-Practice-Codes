gadgets=[
    {
        'name':'smartphone',
        'description':'A smartphone is a mobile phone that includes advanced functionality beyond making phone calls and sending text messages.'
    },
    {
        'name':'smartwatch',
        'description':'A smartwatch is a wearable computing device that closely resembles a wristwatch or other time-keeping device.'
    },
    {
        'name':'pda',
        'description':'A personal digital assistant (PDA), also known as a handheld PC, is a variety mobile device which functions as a personal information manager.'
    },
    {
        'name':'tablet',
        'description':'A tablet is a wireless touch screen personal computer (PC) that is smaller than a notebook but larger than a smartphone.'
    },
    {
        'name':'laptop',
        'description':'A laptop, laptop computer, or notebook computer is a small, portable personal computer (PC) with a screen and alphanumeric keyboard.'
    }
]

function fetchData(aname){
    for (var i=0; i<gadgets.length; i++){
        if(gadgets[i]['name']===aname){
            return gadgets[i];
        }
    }
}

module.exports.fetch = fetchData;