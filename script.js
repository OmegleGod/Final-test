document.addEventListener("DOMContentLoaded", function () {
    console.log("Page loaded successfully!");

    // PayPal Integration
    paypal.Buttons({
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: '35.00' // Set the actual price
                    }
                }]
            });
        },
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                alert("✅ Payment successful! Your folder will be sent automatically.");
                window.location.href = "https://web.telegram.org/k/#@Seller_supportMonkey"; // Redirects to content
            });
        }
    }).render("#paypal-button-container");
});
