document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('newsletterForm');

    form.onsubmit = function(e) {
        e.preventDefault();

        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var topic = document.getElementById('topic').value;
        var preference = document.getElementById('preferences').value;

        if (name.length === 0) {
            alert('Please enter your name.');
            return;
        }

        if (email.indexOf('@') === -1) {
            alert('Please enter a valid email address.');
            return;
        }

        if (phone.length < 10) {
            alert('Phone number must be at least 10 digits.');
            return;
        }

        if (topic === "") {
            alert('Please select a topic of interest.');
            return;
        }

        if (preference === "") {
            alert('Please select your update preference.');
            return;
        }

        var subscriber = {
            name: name,
            email: email,
            phone: phone,
            topic: topic,
            preference: preference
        };
        localStorage.setItem('newsletter_subscriber', JSON.stringify(subscriber));

        alert('Thank you for subscribing to our newsletter!');

        form.reset();
    };
});
