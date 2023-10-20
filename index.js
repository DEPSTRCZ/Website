function ShowIcons() {
    const icons = document.querySelectorAll(".icon");

    icons.forEach((icon, index) => {
        setTimeout(() => {
            icon.style.transform = "translateY(0)";
            icon.style.opacity = "1";
        }, index * 250);
    });
}

document.addEventListener("DOMContentLoaded", async () => {
    setTimeout(async () => {
        document.getElementById("hello").innerHTML = "";

        await new Typewriter(document.getElementById("hello"), {
            loop: false,
            delay: 150,
        }).typeString("Hi, I'm <span id='Nick'>Depstr</span>").start().callFunction((state) => {
            state.elements.cursor.remove()
            setTimeout(() => {
                new Typewriter(document.getElementById("ActivitiesStates"), {
                    loop: true,
                    delay: 200,
                    deleteSpeed: 25,
                    autoStart: true,
                    strings: ["PROGRAMMER","DISCORD BOT DEVELOPER","SERVER ADMIN","STUDENT"]
                })
                setTimeout(() => ShowIcons(), 1000)
            }, 1000)
            

        });
        
        

    }, 2100);


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

});

