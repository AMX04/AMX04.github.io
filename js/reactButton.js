// This is a React component written using JSX
const ConnectButton = () => {
    const handleConnect = () => {
        // This query string directly opens Web Gmail's "Compose" window 
        // with your email address already pre-filled in the "To:" field!
        const gmailLink = 'https://mail.google.com/mail/?view=cm&fs=1&to=aanandit0603@gmail.com';
        
        // Opens the link in a new browser tab
        window.open(gmailLink, '_blank');
    };

    return (
        <button 
            className="btn secondary-btn" 
            style={{ borderColor: '#ea4335', color: '#ea4335', background: 'rgba(234, 67, 53, 0.05)' }} 
            onClick={handleConnect}
        >
            ✉️ Connect via Gmail
        </button>
    );
};

// Find the div we added to our HTML to act as the React root
const domNode = document.getElementById('react-button-root');
if (domNode) {
    const root = ReactDOM.createRoot(domNode);
    root.render(<ConnectButton />);
}
