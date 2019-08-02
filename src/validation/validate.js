const error = {
    a: "Please enter a valid business name.",
    b: "Please enter a valid email address.",
    c: "Please enter a valid username.",
    d: "Please enter a valid password.",
    e: "Password should have six characters.",
    f: "Password should have one uppercase character.",
    g: "Password should have one lowercase character.",
    h: "Password should have one digit.",
    i: "Please select a business type.",
    j: "Please accept terms of services.",
    k: "Please accept Privacy Policy."
};

export default function validate(payload) {
    const { business, email, username, password, type, policy, terms } = payload;

    let errors = {
        businessError: "",
        emailError: "",
        usernameError: "",
        passwordError: "",
        typeError: "",
        policyError: "",
        termsError: ""
    };

    if (!business) {
        errors.businessError = error.a;
    }

    //checks for valid email via @ character
    if (!email || !/@/.test(email)) {
        errors.emailError = error.b;
    }

    if (!username) {
        errors.usernameError = error.c;
    }

    if (!password) {
        errors.passwordError = error.d;
    }

    if (!type) {
        errors.typeError = error.i;
    }

    if (!policy) {
        errors.policyError = error.k;
    }

    if (!terms) {
        errors.termsError = error.j;
    }

    //if user has inputted a password we do a more extensive check and
    // break on the closest condition so we don't unneccessary go through all errors
    //its going to complain about labels in the break statements, I think ES6 wants to phase this out
    extensiveCheck: if (password) {
        if (password.length < 6) {
            errors.passwordError = error.e;
            break extensiveCheck;
        }

        if (!/[A-Z]/.test(password)) {
            errors.passwordError = error.f;
            break extensiveCheck;
        }

        if (!/[a-z]/.test(password)) {
            errors.passwordError = error.g;
            break extensiveCheck;
        }

        if (!/\d/.test(password)) {
            errors.passwordError = error.h;
            break extensiveCheck;
        }
    }
    return errors;
}
