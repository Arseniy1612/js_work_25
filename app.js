
const tooltipTrigger = document.querySelector('#modalBtn');
new bootstrap.Tooltip(tooltipTrigger);

const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
tooltipTrigger.addEventListener('click', () => modal.show());

const alertBtn = document.getElementById('alertBtn');
const alertDiv = document.getElementById('myAlert');
alertBtn.addEventListener('click', () => alertDiv.classList.toggle('d-none'));
const myBD = moment("2008-12-16");
document.getElementById('myBirthday').textContent = myBD.format("DD/MM/YYYY");

const convertBtn = document.getElementById('convertBtn');
convertBtn.addEventListener('click', () => {
    const input = document.getElementById('userBirthday').value.trim();
    const resultDiv = document.getElementById('result');
    const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

    resultDiv.innerHTML = regex.test(input)
        ? `<div class="alert alert-info">Ваша дата у форматі РРРР-ММ-ДД: ${moment(input, "DD/MM/YYYY").format("YYYY-MM-DD")}</div>`
        : '<div class="alert alert-danger">Невірний формат дати!</div>';
});
