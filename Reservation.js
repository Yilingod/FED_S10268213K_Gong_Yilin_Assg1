const currentDate = document.querySelector(".current-date"),
daysTag = document.querySelector(".days"),
prevNextIcon =document.querySelectorAll(".switch-icons i");

let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

let bookedDate,
    bookedMonth,
    bookedYear;

const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

// Function to update the calendar's current date display
const volatileCalender = () => {
    let firstDayofMonth = new Date(currYear,currMonth,1).getDay(),
    lastDateOfMonth = new Date(currYear,currMonth+1,0).getDate(); //Get the last date of month
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) {
        liTag += `<li style="pointer-events:none;"></li>`;
        
    }

    for (let i = 1; i <= lastDateOfMonth; i++) {
       
        if(i <= date.getDate() && currMonth === date.getMonth()){
            liTag += `<li class = "inactive">${i}</li>`;
        }
        else{

            if(i == bookedDate && currMonth == bookedMonth && bookedYear == currYear){
                liTag += `<li class = "current-active">${i}</li>`;
            }
            else{
                liTag += `<li>${i}</li>`;
            }
        }
        

    }
    console.log(liTag)
    currentDate.innerText = `${monthNames[currMonth]} ${currYear}`; 
    daysTag.innerHTML = liTag;

    const prev = document.getElementById("prev");
    if(currMonth === date.getMonth() && currYear === date.getFullYear()){
        prev.style.display = "none"
    }
    else{
        prev.style.display = ""
    }

    

    const dateElements = daysTag.querySelectorAll("li:not(.inactive)");
    dateElements.forEach((day) => {
        day.addEventListener("click", () => {
            bookedDate = day.textContent
            bookedMonth = currMonth
            bookedYear = currYear
            volatileCalender(); // Update the calendar UI after booking
            
            

            selectedDate = `${monthNames[currMonth]} ${day.textContent}, ${currYear}`;
            console.log("Selected Date:", selectedDate); // Store and log the selected date
        });
    });
    
};

volatileCalender();

prevNextIcon.forEach(icon => {
    icon.addEventListener("click",() => {
        if (icon.id === "prev") {
            currMonth -= 1; // Move to the previous month
        } 
        else if (icon.id === "next") {
            currMonth += 1; // Move to the next month
        }

        // Adjust year if month overflows
        if (currMonth < 0) {
            currMonth = 11;
            currYear -= 1;
        } else if (currMonth > 11) {
            currMonth = 0;
            currYear += 1;
        }

        // Update the calendar
        volatileCalender();
    })
});

