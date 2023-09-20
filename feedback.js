document.getElementById('feedbackForm').addEventListener('submit', function(event) {
            event.preventDefault();
            document.getElementById('feedbackForm').style.display = 'none';
            document.getElementById('thankYouMessage').style.display = 'block';
        });
