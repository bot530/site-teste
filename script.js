function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;
    let soma = 0, resto;
    for (let i = 1; i <= 9; i++) soma += parseInt(cpf[i - 1]) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf[9])) return false;
    soma = 0;
    for (let i = 1; i <= 10; i++) soma += parseInt(cpf[i - 1]) * (12 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    return resto === parseInt(cpf[10]);
}

function validarCNPJ(cnpj) {
    cnpj = cnpj.replace(/[^\d]+/g, '');
    if (cnpj.length !== 14) return false;
    let tamanho = cnpj.length - 2;
    let numeros = cnpj.substring(0, tamanho);
    let digitos = cnpj.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) pos = 9;
    }
    let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0)) return false;
    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    return resultado == digitos.charAt(1);
}

function validarTamanhoCPF_CNPJ() {
    let cpfCnpj = document.getElementById("cpfCnpj").value.replace(/\D/g, "");
    if (cpfCnpj.length > 14) {
        cpfCnpj = cpfCnpj.substring(0, 14);
        document.getElementById("cpfCnpj").value = cpfCnpj;
    }
}

function formatarNome() {
    let nome = document.getElementById("name").value;
    nome = nome.toLowerCase().replace(/(?:^|\s)\S/g, function(letra) {
        return letra.toUpperCase();
    });
    document.getElementById("name").value = nome;
}

function formatarCPF_CNPJ() {
    let cpfCnpj = document.getElementById("cpfCnpj").value.replace(/\D/g, "");
    
    if (cpfCnpj.length <= 11) {
        cpfCnpj = cpfCnpj.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    } else {
        cpfCnpj = cpfCnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
    }
    
    document.getElementById("cpfCnpj").value = cpfCnpj;
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let cpfCnpj = document.getElementById("cpfCnpj").value.replace(/\D/g, "");
    let reason = document.getElementById("reason").value;
    let nameError = document.getElementById("nameError");
    let cpfCnpjError = document.getElementById("cpfCnpjError");
    let valid = true;

    // Validação do nome
    if (name.length === 0 || name.length > 100) {
        nameError.style.display = "block";
        valid = false;
    } else {
        nameError.style.display = "none";
    }

    // Validação do CPF/CNPJ
    if (cpfCnpj.length === 11) {
        if (!validarCPF(cpfCnpj)) {
            cpfCnpjError.textContent = "CPF inválido!";
            cpfCnpjError.style.display = "block";
            valid = false;
        } else {
            cpfCnpjError.style.display = "none";
        }
    } else if (cpfCnpj.length === 14) {
        if (!validarCNPJ(cpfCnpj)) {
            cpfCnpjError.textContent = "CNPJ inválido!";
            cpfCnpjError.style.display = "block";
            valid = false;
        } else {
            cpfCnpjError.style.display = "none";
        }
    } else {
        cpfCnpjError.textContent = "CPF deve ter 11 dígitos e CNPJ 14 dígitos.";
        cpfCnpjError.style.display = "block";
        valid = false;
    }

    if (!valid) return;

    // Número do WhatsApp (altere para o seu número real)
    let whatsappNumber = "5517981945983";
    let message = `Olá, meu nome é ${name}. Meu CPF/CNPJ é ${cpfCnpj} e gostaria de falar sobre: ${reason}.`;
    let whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
});

// Adicionar ao final do script.js

// Melhorar o teclado para campos numéricos
document.getElementById("cpfCnpj").addEventListener("focus", function() {
    if (window.innerWidth <= 768) {
        this.setAttribute("inputmode", "numeric");
    }
});

// Ajustar o zoom ao focar nos campos
document.querySelectorAll("input, select").forEach(element => {
    element.addEventListener("focus", function() {
        if (window.innerWidth <= 768) {
            window.scrollTo(0, this.offsetTop - 100);
        }
    });
});
