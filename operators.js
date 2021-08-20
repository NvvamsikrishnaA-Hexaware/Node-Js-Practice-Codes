a = {
    'name':'Camel',
    'kingdom':'Animalia',
    'phylum':'Chordata',
    'class':'Mammalia',
    'order':'Artiodactyla',
    'family':'Camelidae'
}
b = {
    'name1':'Deer',
    'kingdom':'Animalia',
    'phylum':'Chordata',
    'class':'Mammalia',
    'order':'Artiodactyla',
    'family':'Cervidae'
}

console.log({...a,...b})

function test(...c) {
    console.log(c)
}
test(a,b)
test({...a,...b})