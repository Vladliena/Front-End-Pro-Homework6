let coordinates;
let city = prompt('please add the city', 'Tel Aviv, Odesa, Paris, Venice, Istanbul').trim().toUpperCase();

switch (city) {
    case 'TEL AVIV':
        coordinates = '32.085300;34.781769';
        break;
    case 'ODESA':
        coordinates = '46.482525;30.723309';
        break;
    case 'PARIS':
        coordinates = '48.856613;2.352222';
        break;
    case 'VENICE':
        coordinates = '45.440845;12.315515';
        break;
    case 'ISTANBUL':
        coordinates = '41.015137;28.979530';
        break;
    default:
        alert('we dont have such coordinates, sorry');
}

let finalString = `Coordinates for ${city}: ${coordinates}`;

alert(`${finalString}`)