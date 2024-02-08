document.addEventListener("DOMContentLoaded", function () {
    const bigImage = document.querySelector(".big_image img");
    const otherImages = document.querySelectorAll(".other_images img");
    const discountValue = document.getElementById("compare_at_price");
    var originalPrice = parseFloat(
        document.getElementById("price").innerText.replace(/[^0-9.]+/g, "")
    );
    var discountPercentage =
        parseFloat(
            document.getElementById("discount").innerText.replace(/[^0-9.]+/g, "")
        ) / 100;

    // Calculate the discounted price
    var discountedPrice = originalPrice - originalPrice * discountPercentage;

    // Update the compare_at_price with the discounted price
    document.getElementById("compare_at_price").innerText =
        "$" + discountedPrice.toFixed(2);


    otherImages.forEach((image) => {
        image.addEventListener("click", function () {
            // Set the source of the big image to the clicked image
            bigImage.src = this.src;

            // Remove border from all other images
            otherImages.forEach((img) => {
                img.style.border = "none";
            });

            // Add black border to the clicked image
            this.style.border = "4px solid black";
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const minusButton = document.querySelector(".minus");
    const plusButton = document.querySelector(".plus");
    const countDisplay = document.querySelector(".count");
    const addToCartButton = document.getElementById("addToCartButton");

    let quantity = parseInt(countDisplay.textContent);

    minusButton.addEventListener("click", function () {
        if (quantity > 1) {
            quantity--;
            countDisplay.textContent = quantity;
        }
    });

    plusButton.addEventListener("click", function () {
        quantity++;
        countDisplay.textContent = quantity;
    });

    addToCartButton.addEventListener('click', function () {
        var selectedColor;
        var colorElements = document.querySelectorAll('.color');
        colorElements.forEach(function (colorElement) {
            if (colorElement.classList.contains('selected')) {
                selectedColor = colorElement.id;
            }
        });

        var selectedSize;
        var sizeElements = document.querySelectorAll('.size input[type="radio"]');
        sizeElements.forEach(function (sizeElement) {
            if (sizeElement.checked) {
                selectedSize = sizeElement.value; // Get the value attribute of the checked radio button
            }
        });

        if (selectedColor && selectedSize) {
            document.getElementById("messageSpan").textContent = "Embrace Sideboard with Color " + selectedColor + " and Size " + selectedSize + " added to Cart";
            document.getElementById("messageSpan").style.display = "inline";
        } else {
            alert("Please select both color and size before adding to cart.");
        }
    });

    var colorElements = document.querySelectorAll('.color');
    colorElements.forEach(function (colorElement) {
        colorElement.addEventListener('click', function () {
            colorElements.forEach(function (ce) {
                ce.classList.remove('selected');
            });
            colorElement.classList.add('selected');
        });
    });
});


var colorElements = document.querySelectorAll('.color');
colorElements.forEach(function (colorElement) {
    colorElement.addEventListener('click', function () {
        colorElements.forEach(function (ce) {
            ce.classList.remove('selected');
        });
        colorElement.classList.add('selected');
    });
});









document.addEventListener("DOMContentLoaded", function () {
    const colors = document.querySelectorAll(".color");

    colors.forEach((color) => {
        color.addEventListener("click", function () {
            // Remove inner border from all colors
            colors.forEach((c) => {
                c.querySelector(".inner-border").style.opacity = 0;
            });

            // Add inner border and show it
            const innerBorder = this.querySelector(".inner-border");
            innerBorder.style.opacity = 1;
            innerBorder.style.borderColor = this.id; // Set inner border color to match box color
        });

        // Create and append inner border element
        const innerBorder = document.createElement("div");
        innerBorder.className = "inner-border";
        color.appendChild(innerBorder);
    });
});