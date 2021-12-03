window.addEventListener('DOMContentLoaded', (event) => {
    //changing values of salary according to slider

    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input', function() {
        output.textContent = salary.value;
    });
    // checking for name validation
    const text = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    text.addEventListener('input', function() {
        let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if (nameRegex.test(text.value))
            textError.textContent = "";
        else textError.textContent = "Name is Incorrect";
    });
});