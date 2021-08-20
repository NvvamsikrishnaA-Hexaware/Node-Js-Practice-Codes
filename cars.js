cars = [
    {
        'name':'Volkswagen-Polo',
        'engine':'1.0 L 3-cylinder',
        'tank':'45L',
        'economy':'18kmpl'
    },
    {
        'name':'Mahindra-Scorpio',
        'engine':'2.2 L 4-cylinder',
        'tank':'60L',
        'economy':'14kmpl'
    },
    {
        'name':'Mahindra-Bolero',
        'engine':'1.5 L 3-cylinder',
        'tank':'50L',
        'economy':'17kmpl'
    },
    {
        'name':'Ford-EcoSport',
        'engine':'1.5 L 4-cylinder',
        'tank':'52L',
        'economy':'21kmpl'
    },
    {
        'name':'Hyundai-Creta',
        'engine':'1.5 L 4-cylinder',
        'tank':'50L',
        'economy':'21kmpl'
    }
]

function fetchData(aname){
    for (var i=0; i<cars.length; i++){
        if(cars[i]['name']===aname){
            return cars[i];
        }
    }
}

module.exports.fetch = fetchData;