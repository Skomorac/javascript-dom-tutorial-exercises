let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

let selector = document.querySelector('#mySelect');

for (let i=0; i < countries.length; i++) {
    let option = document.createElement('option');
    option.value = countries[i];
    option.textContent = countries[i];

    selector.appendChild(option);
}

selector.addEventListener('change', function() {
    let selectedOption = selector.value;
    alert(selectedOption);
})
