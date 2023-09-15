document.addEventListener("DOMContentLoaded", () => {
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