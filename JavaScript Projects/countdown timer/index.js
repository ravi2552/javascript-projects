const endDate = "13 August 2023 09:21 PM"

document.getElementById('end-date').innerText = endDate;
const inputs = document.querySelectorAll('input')


function clock(){
    const end  = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;

    if(diff < 0) return;
    // console.log(diff);
    // Convert into days
    inputs[0].value = Math.floor(diff / 3600 / 24);
    // Convert into hours
    inputs[1].value = Math.floor(diff / 3600) % 24;
    // Convert into minutes
    inputs[2].value = Math.floor(diff / 60) % 60;
    // Convert into Seconds
    inputs[3].value = Math.floor(diff) % 60;

}

// clock()


/**
 * 1 day = 24 hours
 * 
 * 1 hour = 60 min
 * 
 * 60 min = 3600 sec 
 * 
 * 
 */

setInterval(() => {
    clock()
}, 1000);