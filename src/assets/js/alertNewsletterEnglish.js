//Acessa o campo do email
const emailNewsletter = document.getElementById("email-news");

// Acessa campo de erro no html
let emailNewsletterError = document.getElementById("emailNewsError");

// Caracteres para validar se o email é válido
const emailIsValidNews = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;



emailNewsletter.addEventListener('submit', (event) => {
    event.preventDefault();

    showAlertMessage();

});


// Funcao p validar campo email
function validateEmailInput() {
    const valueNews = emailNewsletter.value.trim();
    let errorMessageNews = '';
    let isValidNews = false;

    // Verifica se o email é válido
    if (!valueNews.match(emailIsValidNews)) {
        errorMessageNews = 'Invalid email';
        isValidNews = false;
    } else {
        isValidNews = true;
    }
    emailNewsletterError.innerHTML = errorMessageNews;

    return isValidNews;
}



//Funcao p mostrar a tela de alerta se o email for preenchido
function showAlertMessage() {
    if ( validateEmailInput()) {
        alert("Email successfully registered!");
    }
}

