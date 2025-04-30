function searchPlace() {
    const place = document.getElementById('placeInput').value;
    const resultDiv = document.getElementById('result');
    
    // Show loading state
    resultDiv.innerHTML = '<p>Searching...</p>';

    fetch(`http://localhost:8080/api/places/search?query=${encodeURIComponent(place)}`)
        .then(response => response.json())
        .then(data => {
            let html = `
                <h2>${data.name}</h2>
                <p>${data.description}</p>
                <h3>Popular Places:</h3>
                <div class="venues-grid">
            `;
            
            data.venues.forEach(venue => {
                html += `
                    <div class="venue-card">
                        ${venue.imageUrl ? 
                            `<img src="${venue.imageUrl}" alt="${venue.name}">` : 
                            '<div class="no-image">No Image Available</div>'
                        }
                        <h4>${venue.name}</h4>
                        <p>${venue.category || ''}</p>
                        <p>${venue.address || ''}</p>
                    </div>
                `;
            });
            
            html += '</div>';
            resultDiv.innerHTML = html;
        })
        .catch(error => {
            console.error('Error:', error);
            resultDiv.innerHTML = '<p>Error fetching results. Please try again.</p>';
        });
}

// Optional: Add event listener for Enter key
document.getElementById('placeInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchPlace();
    }
});