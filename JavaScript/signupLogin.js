function switchForm(formId) {
    // Hide all forms and remove 'active' class from tabs
    document.querySelectorAll('.auth-form').forEach(form => form.classList.remove('active'));
    document.querySelectorAll('.auth-tab').forEach(tab => tab.classList.remove('active'));

    // Show the selected form and set the corresponding tab as active
    document.getElementById(formId).classList.add('active');
    document.querySelector(`.auth-tab[onclick="switchForm('${formId}')"]`).classList.add('active');
}
