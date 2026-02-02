// What is the output of the following code?

async function loadJson(url) {
    let response = await fetch(url);
    if (response.status == 200) {
        let json = await response.json();
        return json;
    }
    throw new Error(response.status);

}

loadJson("https://602fc537a1e9d20017af105e.mockapi.io/api/v1/products").catch((err) =>
       console.log(err)
);

/* It will return the json */