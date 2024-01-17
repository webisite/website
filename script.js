document.addEventListener("DOMContentLoaded", function () {
    // Get item ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const itemId = urlParams.get('item');

    // Call function to fetch and display item details
    displayItemDetails(itemId);
});

function displayItemDetails(itemId) {
    // You need to implement logic here to fetch details based on itemId
    // For now, let's assume you have an object with item details

    const itemDetails = {
        item1: { name: "BK-24-01", price: "$12.99", image: "images/Barbering-RazorScissor/1.jpeg",description: "Premium - This professional high quality stainless steel hairdressing scissors uses precision blades and hand-sharpened edges for easy and even hair trimming. You don't need another hair clipper anymore! Sharp blade: A barber scissors with a smooth surface and raised edges that will not damage or split the ends of the hair. Smooth cutting is ideal for cutting wet or dry hair. Durable material: Made of 100% high quality stainless steel, it has excellent durability, made up of 440c stainless steel, corrosion resistance, high temperature resistance and durability.", },
        item2: { name: "Scissor 2", price: "$19.99", image:"images/Barbering-RazorScissor/2.jpeg" },
        item3: { name: "Scissor 3", price: "$255.99", image: "images/Barbering-RazorScissor/3.jpeg" },
        item4: { name: "Scissor 4", price: "$2.99", image: "images/Barbering-RazorScissor/4.jpeg" },
        item5: { name: "Scissor 5", price: "$2.99", image: "images/Barbering-RazorScissor/5.jpeg" },
        item6: { name: "Scissor 6", price: "$2.99", image: "images/Barbering-RazorScissor/6.jpeg" },
        item7: { name: "Scissor 7", price: "$2.99", image: "images/Barbering-RazorScissor/7.jpeg" },
        item8: { name: "Scissor 8", price: "$2.99", image: "images/Barbering-RazorScissor/8.jpeg" },
        item9: { name: "Scissor 1", price: "$2.99", image: "images/Barbering-Simple-Scissors/1.jpeg" },
        item10: { name: "Scissor 2", price: "$2.99", image: "images/Barbering-Simple-Scissors/2.jpeg" },
        item11: { name: "Scissor 3", price: "$2.99", image: "images/Barbering-Simple-Scissors/3.jpeg" },
        item12: { name: "Scissor 4", price: "$2.99", image: "images/Barbering-Simple-Scissors/4.jpeg" },
        item13: { name: "Scissor 5", price: "$2.99", image: "images/Barbering-Simple-Scissors/5.jpeg" },
        item14: { name: "Scissor 6", price: "$2.99", image: "images/Barbering-Simple-Scissors/6.jpeg" },
        item15: { name: "Scissor 1", price: "$2.99", image: "images/Barbering-PlasticHandle-Scissors/1.jpeg" },
        item16: { name: "Scissor 2", price: "$2.99", image: "images/Barbering-PlasticHandle-Scissors/2.jpeg" },
        item17: { name: "Scissor 3", price: "$2.99", image: "images/Barbering-PlasticHandle-Scissors/3.jpeg" },
        item18: { name: "Scissor 4", price: "$2.99", image: "images/Barbering-PlasticHandle-Scissors/4.jpeg" },
        item19: { name: "Scissor 5", price: "$2.99", image: "images/Barbering-PlasticHandle-Scissors/5.jpeg" },
        item20: { name: "Scissor 6", price: "$2.99", image: "images/Barbering-PlasticHandle-Scissors/6.jpeg" },
        item21: { name: "Scissor 6", price: "$2.99", image: "images/Barbering Thinning scissors/1.jpeg" },
        item22: { name: "Scissor 6", price: "$2.99", image: "images/Barbering Thinning scissors/2.jpeg" },
        item23: { name: "Scissor 6", price: "$2.99", image: "images/Barbering Thinning scissors/3.jpeg" },
        item24: { name: "Scissor 6", price: "$2.99", image: "images/Barbering Thinning scissors/4.jpeg" },
        item25: { name: "Scissor 6", price: "$2.99", image: "images/Barbering Thinning scissors/5.jpeg" },
        item26: { name: "Scissor 6", price: "$2.99", image: "images/Barbering Thinning scissors/6.jpeg" },
        item27: { name: "Scissor 6", price: "$2.99", image: "images/Barbering-Chunker Scissors/1.jpeg" },
        item28: { name: "Scissor 6", price: "$2.99", image: "images/Barbering-Chunker Scissors/2.jpeg" },
        item29: { name: "Scissor 6", price: "$2.99", image: "images/Barbering-Chunker Scissors/3.jpeg" },
        item30: { name: "Scissor 6", price: "$2.99", image: "images/Barbering-Grooming Scissors/1.jpeg" },
        item31: { name: "Scissor 6", price: "$2.99", image: "images/Barbering-Grooming Scissors/2.jpeg" },
        item32: { name: "Scissor 6", price: "$2.99", image: "images/Barbering-Grooming Scissors/3.jpeg" },
        
       
        // Add or update items as needed
    };


    const selectedProduct = itemDetails[itemId];

    // Update HTML elements with item details
    
    document.getElementById("item-title").innerText = "Product Details";
    document.getElementById("item-selected").innerText = `Selected Item: ${selectedProduct.name}`;
    document.getElementById("item-name").innerText = selectedProduct.name;
    document.getElementById("item-price").innerText = selectedProduct.price;
    document.getElementById("item-image").src = selectedProduct.image;
    document.getElementById("item-description").innerText = itemDetails[itemId].description;

}

function submitForm() {
    const itemName = document.getElementById("item-name").innerText;
    const itemPrice = document.getElementById("item-price").innerText;
    const quantity = document.getElementById("quantity").value;
    const userName = document.getElementById("userName").value;
    const userAddress = document.getElementById("userAddress").value;
    const userContact = document.getElementById("userContact").value;

    // Create a message body with the details
    const messageBody = `Product Details:
    Name: ${itemName}
    Price: ${itemPrice}
    Quantity: ${quantity}

    User Information:
    Name: ${userName}
    Address: ${userAddress}
    Contact: ${userContact}`;

    // Create a "mailto" link with the pre-filled message
    const mailtoLink = `mailto:webdevgo1@gmail.com?subject=Order&body=${encodeURIComponent(messageBody)}`;

    // Open the user's default email client with the pre-filled message
    window.location.href = mailtoLink;
}



