/**
 * script.js - Validasi Form Newsletter
 * FontDale Premium Mall
 *
 * Melakukan 5 validasi manual pada form newsletter:
 * 1. Nama tidak boleh kosong
 * 2. Email harus mengandung karakter @
 * 3. Nomor telepon minimal 10 digit
 * 4. Topic of Interest harus dipilih
 * 5. Update Preferences harus dipilih
 *
 * Data disimpan ke localStorage jika semua validasi lolos.
 */

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('newsletterForm');

    form.onsubmit = function(e) {
        e.preventDefault();

        // Ambil nilai dari setiap field
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var topic = document.getElementById('topic').value;
        var preference = document.getElementById('preferences').value;

        // Validasi 1: Nama tidak boleh kosong
        if (name.length === 0) {
            alert('Please enter your name.');
            return;
        }

        // Validasi 2: Email harus mengandung karakter @
        if (email.indexOf('@') === -1) {
            alert('Please enter a valid email address.');
            return;
        }

        // Validasi 3: Nomor Telepon minimal 10 digit
        if (phone.length < 10) {
            alert('Phone number must be at least 10 digits.');
            return;
        }

        // Validasi 4: Topic of Interest harus dipilih
        if (topic === "") {
            alert('Please select a topic of interest.');
            return;
        }

        // Validasi 5: Update Preferences harus dipilih
        if (preference === "") {
            alert('Please select your update preference.');
            return;
        }

        // Jika semua validasi lolos, simpan data ke localStorage
        var subscriber = {
            name: name,
            email: email,
            phone: phone,
            topic: topic,
            preference: preference
        };
        localStorage.setItem('newsletter_subscriber', JSON.stringify(subscriber));

        // Tampilkan alert sukses
        alert('Thank you for subscribing to our newsletter!');

        // Reset form
        form.reset();
    };
});
