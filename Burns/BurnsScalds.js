function openModal(title, info, image) {
    // Set the modal content
    document.getElementById('modalImage').src = image; // Set the image
    document.getElementById('modalTitle').innerHTML = title; // Set the title
    document.getElementById('modalInfo').innerHTML = info; // Set the description (use innerHTML for HTML content)
    
    // Show the modal
    document.getElementById('infoModal').style.display = 'flex'; 
}

