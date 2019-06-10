export function formatPrice(cents) {
    return (cents/100).toLocaleString('end-US', {
        style: 'currency',
        currency: 'USD'
    });
}