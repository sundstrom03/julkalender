document.addEventListener("DOMContentLoaded", function () {
    const calendarBody = document.getElementById("calendar-body");
    calendarBody.innerHTML = "";

    const today = new Date().getDate();
    const doors = [];

    for (let i = 1; i <= 24; i++) {
        let door = document.createElement("div");
        door.classList.add("calendar-door");
        door.id = "door" + i;
        door.innerHTML = i;
        doors.push(door); 
    }
    while (doors.length) {
        const randomIndex = Math.floor(Math.random() * doors.length);
        const door = doors.splice(randomIndex, 1)[0];

        calendarBody.appendChild(door);

        if (parseInt(door.innerHTML) <= today) {
            door.addEventListener("click", doorImage, { once: true });
        } else {
            door.addEventListener("click", function () {
                alert("Du kan inte öppna den här luckan än!!");
            });
        }
    }
});

function doorImage(event) {
    const randomSpecial = christmasSpecials[Math.floor(Math.random() * christmasSpecials.length)];
    event.target.style.backgroundImage = `url('${randomSpecial.img}')`;

    setTimeout(function () {
        alert(`Erbjudande: ${randomSpecial.label}\nKod: ${randomSpecial.code}`);
    }, 100);
}

const christmasSpecials = [
    { label: "Läppärit -20%", code: "ASDJKL902", img: "img/bild3.jpg" },
    { label: "Ilmainen toimitus", code: "VNKJDO0987", img: "img/bild2.jpg" },
    { label: "Muistikortit ja muistitikut puoleen hintaan", code: "IOSDFJ872", img: "img/bild2.jpg" },
    { label: "Geforce näytönohjaimet -30%", code: "KLHJ8976", img: "img/bild1.jpg" },
    { label: "Samsung 55'' televisio 399€", code: "SDFJKL9080", img: "img/bild3.jpg" },
    { label: "Robottipölynimuri 129€", code: "PQWO23894", img: "img/bild2.jpg" },
    { label: "Verkkotuotteet -40%", code: "KSJHJKS8922", img: "img/bild1.jpg" },
    { label: "1Tb SSD 49€", code: "GUD7728930", img: "img/bild3.jpg" },
    { label: "Intel tuotteet -22%", code: "QPSAL98I9A", img: "img/bild1.jpg" },
    { label: "AMD 6600XT 249€", code: "DFCTY231TT", img: "img/bild2.jpg" }
];
