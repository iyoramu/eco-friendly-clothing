// Toggle the navigation menu on mobile
document.getElementById('hamburger').addEventListener('click', function() {
    document.getElementById('nav-menu').classList.toggle('show');
});

// Show products based on selected category
function showProducts(category) {
    const products = document.querySelectorAll('.product-item');
    products.forEach(product => {
        if (category === 'all' || product.getAttribute('data-category') === category) {
            product.classList.remove('hidden');
        } else {
            product.classList.add('hidden');
        }
    });
}

// Show all products by default
showProducts('all');
