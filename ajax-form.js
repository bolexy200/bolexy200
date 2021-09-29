var form = document.getElementById("second-form");

function handleSubmit(event) {
    event.preventDefault();

    var status = document.getElementById("second-form-status");

    var requestData = {
        method: form.method,
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
    };

    fetch(event.target.action, requestData).then(function (response) {
        status.innerHTML = "Thanks for your submission!";
        form.reset()
    }).catch(function (error) {
        status.innerHTML = "Oops! There was a problem submitting your form"
    });
}

form.addEventListener("submit", handleSubmit);
