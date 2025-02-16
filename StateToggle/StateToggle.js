document.querySelectorAll('.state-toggle .toggle-button').forEach((el) => {
    el.addEventListener('click', () => {
        el.parentNode.querySelector("input[type='radio']").checked = true;
    });
});
