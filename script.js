const stuff = document.querySelector('.stuff');
const stuffButton = document.querySelector('#click-me');

const createStuff = () => {
  setHeader = {
    headers: {
      Accept: 'application/json',
    },
  }

  fetch('https://randomuser.me/api/', setHeader)
    .then((res) => res.json())
    .then((data) => {
      stuff.innerHTML = data.results[0].name.first;
    })
    .catch((err) => console.log(err));
}
stuffButton.addEventListener('click', createStuff);
createStuff();



