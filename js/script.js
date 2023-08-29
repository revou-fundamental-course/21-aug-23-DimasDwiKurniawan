document.addEventListener("DOMContentLoaded", function () {
    // Form Submission
    const form = document.getElementById("contact-form");
    const formResults = document.getElementById("form-results");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = form.name.value;
        const email = form.email.value;

        const resultText = `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
        `;

        formResults.innerHTML = resultText;
    });
});
