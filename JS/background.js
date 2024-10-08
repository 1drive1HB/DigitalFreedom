document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("background-video");
    video.play();
});

/**section for table link */

document.addEventListener('DOMContentLoaded', function() {
    // Select all rows within the table body
    const rows = document.querySelectorAll('#movies-series-table tbody tr');

    // Iterate over each row and add a click event listener
    rows.forEach(row => {
        row.addEventListener('click', function() {
            const url = this.getAttribute('data-url');
            if (url) {
                window.location.href = url;
            }
        });
    });
});

// document.querySelectorAll('a').forEach(link => {
//     link.addEventListener('click', function(event) {
//         event.preventDefault(); // Prevents the default behavior
//         window.open(this.href, '_blank'); // Opens the link in a new tab
//     });
// });