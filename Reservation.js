const currentDate = document.querySelector(".current-date");
daysTag = documet.querySelector(".days")

let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();
console.log(date,currMonth,currYear)

const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

// Function to update the calendar's current date display
const volatileCalender = () => {
    let lastDateOfMonth = new Date(currYear,currMonth+1,0).getDate(); //Get the last date of month
    let liTag = ''
    for (let i = 1; i <= lastDateOfMonth; i++) {
        liTag = 
        
    }

    currentDate.innerText = `${monthNames[currMonth]} ${currYear}`; 
};

volatileCalender();