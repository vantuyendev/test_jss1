// Function to update the main display when mouse hovers over an image
function upDate(previewPic) {
    // Log to console to verify the function is triggered
    console.log("Update event triggered");
    
    // Log information about the previewPic element
    console.log("Alt text:", previewPic.alt);
    console.log("Source:", previewPic.src);
    
    // Get the element with id of 'image'
    const imageDiv = document.getElementById('image');
    
    // Update the text of the div to show the alt text
    imageDiv.textContent = previewPic.alt;
    
    // Update the background image of the div
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
}

// Function to restore the original state when mouse leaves an image
function undo() {
    // Log to console to verify the function is triggered
    console.log("Undo event triggered");
    
    // Get the element with id of 'image'
    const imageDiv = document.getElementById('image');
    
    // Reset the background image to the original empty value
    imageDiv.style.backgroundImage = "url('')";
    
    // Reset the text to the original message
    imageDiv.textContent = "Hover over an image below to display here.";
}

// Function to add tabindex attribute to all images when page loads
function addTabIndex() {
    // Log to console to verify the function is triggered
    console.log("Page loaded - adding tabindex attributes");
    
    // Get all images with class 'preview'
    const images = document.getElementsByClassName('preview');
    
    // Log the number of images found
    console.log("Number of images found:", images.length);
    
    // Loop through each image and add tabindex attribute
    for (let i = 0; i < images.length; i++) {
        // Set tabindex to make the image keyboard accessible
        images[i].setAttribute('tabindex', '0');
        console.log("Added tabindex to image", i + 1);
    }
    
    console.log("All tabindex attributes added successfully");
}