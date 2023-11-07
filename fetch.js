const $ = document.querySelector.bind(document);
let counter = 0
const url = "https://reqres.in/api/users";

// getting the data from the server
async function getData(url) {
    const response = await fetch(url);
    if (response.status === 200) {
        const data = await response.json()
        return data
    } else {
        throw new Error("your data is not found")
    }
}


// filling the html elements with the recieved data
getData(url).then(function (data) {
    data.data.forEach(item => {
        const src = (data.data[counter]["avatar"]);
        $(`img[id='${counter+1}']`).setAttribute("src", `${src}`)

        const id = (data.data[counter]["id"]);
        $(`span[id = 'userid${counter+1}']`).textContent = id

        const email = (data.data[counter]["email"]);
        $(`span[id = 'useremail${counter+1}']`).textContent = email

        const firstName = (data.data[counter]["first_name"]);
        const lastName = (data.data[counter]["last_name"]);
        $(`span[id = 'username${counter+1}']`).textContent = firstName +" "+ lastName
        counter++
    });

    }).catch(function (error) {
        alert(error)
})