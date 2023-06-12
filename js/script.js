function showMap() {
    var locationInput = document.getElementById('location-input');
    var location = locationInput.value;

    var map = L.map('map').setView([0, 0], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([0, 0]).addTo(map); // Placeholder marker

    // Geocode user-entered location and update map
    fetch('https://nominatim.openstreetmap.org/search?format=json&q=' + encodeURIComponent(location))
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        if (data && data.length > 0) {
          var lat = parseFloat(data[0].lat);
          var lon = parseFloat(data[0].lon);

          map.setView([lat, lon], 12);

          L.marker([lat, lon]).addTo(map);
        }
      })
      .catch(function(error) {
        console.error('Error:', error);
      });
      locationInput.value='';
  }

//   model starts here
  var signInForm = document.getElementById('signin');
  var createAccountForm = document.getElementById('createlogin');

  signInForm.addEventListener('submit', function(event) {
    event.preventDefault();

    var signInEmail = document.getElementById('exampleInputEmail1').value;
    var signInPassword = document.getElementById('exampleInputPassword1').value;

    var storedEmail = localStorage.getItem('createAccountEmail');
    var storedPassword = localStorage.getItem('createAccountPassword');

    // Validate sign-in details
    if (signInEmail === storedEmail && signInPassword === storedPassword) {
      alert('Sign in successful!');
      // ...
    } else {
      alert('Invalid email or password. Please try again.');
    }

  });

  createAccountForm.addEventListener('submit', function(event) {
    event.preventDefault();

    var createAccountName = document.getElementById('exampleInputUser1').value;
    var createAccountEmail = document.getElementById('exampleInputEmail2').value;
    var createAccountPassword = document.getElementById('exampleInputPassword2').value;

    localStorage.setItem('createAccountName', createAccountName);
    localStorage.setItem('createAccountEmail', createAccountEmail);
    localStorage.setItem('createAccountPassword', createAccountPassword);

    alert('Created Account Successfully')
  });
