let result = "";

fetch("./frontEndData.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log("error: " + err);
  });

function appendData(data) {
  data.forEach(({ name, image, hyperlink, about, language }) => {
    result += `
      <div class="card">
        <img class="card-image" src="${image}" alt="Product image for the ${name} VSCode extension."/>
        <h1 class="card-name">${name}</h1>
        <p class="card-about">${about}</p>
        <a class="card-link" href="${hyperlink}">
          <button class="btn">Read More</button>
        </a>
      </div>
    `;
  });

  // Insert into the DOM (assuming you have a container element)
  document.querySelector(".container").innerHTML = result;
}
