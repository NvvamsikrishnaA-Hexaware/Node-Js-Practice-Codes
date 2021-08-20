animals = [
        {
            'name':'Wolf',
            'kingdom':'Animalia',
            'phylum':'Chordata',
            'class':'Mammalia',
            'order':'Carnivora',
            'family':'Canidae'
        },
        {
            'name':'Elephant',
            'kingdom':'Animalia',
            'phylum':'Chordata',
            'class':'Mammalia',
            'order':'Proboscidea',
            'family':'Elephantidae'
        },
        {
            'name':'Tiger',
            'kingdom':'Animalia',
            'phylum':'Chordata',
            'class':'Mammalia',
            'order':'Carnivora',
            'family':'Felidae'
        },
        {
            'name':'Camel',
            'kingdom':'Animalia',
            'phylum':'Chordata',
            'class':'Mammalia',
            'order':'Artiodactyla',
            'family':'Camelidae'
        },
        {
            'name':'Deer',
            'kingdom':'Animalia',
            'phylum':'Chordata',
            'class':'Mammalia',
            'order':'Artiodactyla',
            'family':'Cervidae'
        }
    ]
function fetchData(aname){
    for (var i=0; i<animals.length; i++){
        if(animals[i]['name']===aname){
            return animals[i];
        }
    }
}

module.exports.fetch = fetchData;