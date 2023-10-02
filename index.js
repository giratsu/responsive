document.addEventListener("DOMContentLoaded", async ev=>{
    const images = document.getElementsByClassName("grid-image");
    console.log(images);
    
    // Convert HTMLCollection to an array for easier iteration
    const imagesArray = Array.from(images);

    for (let i = 0; i < imagesArray.length; i++) {
        imagesArray[i].setAttribute("src", await GetRandomImageURL());
    }
})

async function GetRandomImageURL()
    {
        let response = await fetch("https://picsum.photos/200");
        let url = response.url;
        return url;
    }