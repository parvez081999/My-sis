function submitQuiz() {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    let score = checkboxes.length;

    if (score > 2) {
        localStorage.setItem('cutenessScore', 'Super Cute! 💖');
    } else {
        localStorage.setItem('cutenessScore', 'Still Adorable! 🥰');
    }

    window.location.href = "results.html";
}
