function Enter(value) {
//http://localhost:8000/aztro
    let img = document.querySelector('img')
    if (value.key == 'Enter') {
        let signElement = document.querySelector('.sign')
        let searchElement = document.querySelector('.sign-search').value.toLowerCase()
        console.log('soye el verdadero value' + searchElement)
        let sign = {
            sign: searchElement
        }
        let signJSON = JSON.stringify(sign)

        console.log(signJSON)

        //Mandar los datos al backend
        fetch('http://localhost:8000/aztro', {
            method: "Post",
            body: signJSON
        }).then(res => res.json()).then(data => {
            signElement.innerHTML = searchElement
            setAztroValues(data)
            switch (searchElement) {
                case 'aries':
                    img.src = './img/aries.png'
                    break;

                case 'taurus':
                    img.src = './img/taurus.webp'
                    break;

                case 'gemini':
                    img.src = './img/taurus.webp'
                    break;

                case 'cancer':
                    img.src = './img/cancer.webp'
                    break;

                case 'leo':
                    img.src = './img/leo.png'
                    break;

                case 'virgo':
                    img.src = './img/virgo.webp'
                    break;

                case 'libra':
                    img.src = './img/libra.webp'
                    break;

                case 'scorpio':
                    img.src = './img/scorpio.webp'
                    break;

                case 'sagittarius':
                    img.src = './img/sagitario.webp'
                    break;

                case 'capricorn':
                    img.src = './img/capricornio.png'
                    break;

                case 'aquarius':
                    img.src = './img/acuario.webp'
                    break;

                case 'pisces':
                    img.src = './img/piscis.webp'
                    break;
                default:
                    break;
            }
            console.log(data)
        })
    }


}

let userDayRange = document.querySelector('[day-range]')
let userSignDescription = document.querySelector('[sign-description]')
let userLuckyNumber = document.querySelector('[your-lucky-number]')
let userLuckyTime = document.querySelector('[your-lucky-time]')

function setAztroValues(data) {
    userDayRange.textContent = data.date_range
    userSignDescription.textContent = data.description
    userLuckyNumber.textContent = 'Lucky Number: ' + data.lucky_number
    userLuckyTime.textContent = 'Lucky Time: ' + data.lucky_time



}