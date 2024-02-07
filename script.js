document.addEventListener('DOMContentLoaded', function() {
    const bigImage = document.querySelector('.big_image img');
    const otherImages = document.querySelectorAll('.other_images img');
  
    otherImages.forEach(image => {
      image.addEventListener('click', function() {
        // Set the source of the big image to the clicked image
        bigImage.src = this.src;
  
        // Remove border from all other images
        otherImages.forEach(img => {
          img.style.border = 'none';
        });
  
        // Add black border to the clicked image
        this.style.border = '4px solid black';
      });
    });
  });
  
  



document.addEventListener('DOMContentLoaded', function () {
    const minusButton = document.querySelector('.minus');
    const plusButton = document.querySelector('.plus');
    const countDisplay = document.querySelector('.count');
    const addToCartButton = document.getElementById('addToCartButton');

    let quantity = parseInt(countDisplay.textContent);

    minusButton.addEventListener('click', function () {
        if (quantity > 1) {
            quantity--;
            countDisplay.textContent = quantity;
        }
    });

    plusButton.addEventListener('click', function () {
        quantity++;
        countDisplay.textContent = quantity;
    });

    addToCartButton.addEventListener('click', function () {
        alert('Item added to cart');
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const colors = document.querySelectorAll('.color');

    colors.forEach(color => {
        color.addEventListener('click', function () {
            // Remove inner border from all colors
            colors.forEach(c => {
                c.querySelector('.inner-border').style.opacity = 0;
            });

            // Add inner border and show it
            const innerBorder = this.querySelector('.inner-border');
            innerBorder.style.opacity = 1;
            innerBorder.style.borderColor = this.id; // Set inner border color to match box color
        });

        // Create and append inner border element
        const innerBorder = document.createElement('div');
        innerBorder.className = 'inner-border';
        color.appendChild(innerBorder);
    });
});


