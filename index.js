// Function to update the main display when mouse hovers over an image
function upDate(previewPic) {
    // Log to console to verify the function is triggered
    console.log("Mouse over event triggered");
    
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
    console.log("Mouse out event triggered");
    
    // Get the element with id of 'image'
    const imageDiv = document.getElementById('image');
    
    // Reset the background image to the original empty value
    imageDiv.style.backgroundImage = "url('')";
    
    // Reset the text to the original message
    imageDiv.textContent = "Hover over an image below to display here.";
}