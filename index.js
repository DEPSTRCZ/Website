function ShowIcons() {
        
    const icons = document.querySelectorAll(".icon");

    icons.forEach((icon, index) => {
        setTimeout(() => {
            icon.style.transform = "translateY(0)";
            icon.style.opacity = "1";
        }, index * 250);
    });
}


document.addEventListener("DOMContentLoaded", () => {
    ShowIcons();
    document.getElementById("hello").innerHTML = `<span class="wave">👋</span>`

    document.getElementById("discord").addEventListener("click", async () => {
        try {
            await navigator.clipboard.writeText("depstr");
            let notify = document.querySelector(".NotifyBox");
            notify.classList.add("active");
            await notify.style.removeProperty("display");
            setTimeout(async () => notify.classList.remove("active"), 3000);

            console.log('Content copied to clipboard');
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    });


    const ActivitiesStates = ["Programmer", "Discord Bot Developer",  ]

    setInterval(async() => {

    }, 5000);

});