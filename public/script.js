let itLocality;
let btnSend;
let container;

function main() {
  itLocality = document.querySelector('#itLocality');
  btnSend = document.querySelector('#btnSend');
  container = document.querySelector('#container');

  btnSend.addEventListener('click', (e) => {
    container.innerHTML = '';

    let locality = itLocality.value;

    fetch('http://localhost:3000/weather?address=' + locality).then(
      (response) => {
        response.json().then((data) => {
          if (data.error) {
            let paragraph = document.createElement('p');

            paragraph.textContent = data.error;

            container.appendChild(paragraph);
          } else {
            let list = document.createElement('ul');

            for (let elem in data) {
              let elemList = document.createElement('li');

              elemList.textContent = data[elem];
              data[elem];

              list.appendChild(elemList);
            }

            container.appendChild(list);
            messageOne.textContent = data.location;
            messageTwo.textContent = data.forecast;
          }
        });
      }
    );
  });
}

window.addEventListener('load', main);
