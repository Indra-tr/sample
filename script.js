const btn = document.querySelector("#btn");


btn.addEventListener("click", async () => {
    let fact = await getfacts();
    let p = document.querySelector("#result");
    p.innerText = fact;
});
let url = "https://catfact.ninja/fact";
async function getfacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact; // return the fact
    } catch (error) {
        console.log(error);
        return "Error fetching dog fact!";
    }
}

