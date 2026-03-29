document.addEventListener('DOMContentLoaded', () => {
    // Modal Logic Event Listeners
    const modal = document.getElementById('googleCertsModal');
    const closeBtn = document.querySelector('.close-modal');

    if(closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto'; // Restore scroll
        });
    }

    if(modal) {
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('show');
                document.body.style.overflow = 'auto';
            }
        });
    }
});

// Global function for the onclick property of the Google card
window.openGoogleModal = function() {
    const modal = document.getElementById('googleCertsModal');
    if(modal) {
        modal.style.display = 'flex'; // Ensure it's active before adding class for transition
        
        // Tiny timeout to allow display:flex to apply before setting opacity
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
        
        document.body.style.overflow = 'hidden'; // Prevent bg scroll
    }
}
