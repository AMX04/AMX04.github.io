// This is a dedicated React 18 component written using modern JSX!
// It renders an interactive connect button that links straight to a pre-filled Gmail compose window.
const ConnectButton = () => {
    const handleConnect = () => {
        const gmailLink = 'https://mail.google.com/mail/?view=cm&fs=1&to=aanandit0603@gmail.com';
        window.open(gmailLink, '_blank');
    };

    return (
        <button 
            className="btn secondary-btn" 
            style={{ 
                borderColor: '#ea4335', 
                color: '#ea4335', 
                background: 'rgba(234, 67, 53, 0.05)', 
                display: 'inline-flex', 
                alignItems: 'center', 
                height: '100%' 
            }} 
            onClick={handleConnect}
        >
            ✉️ Connect via Gmail
        </button>
    );
};

// Find the div portal in index.html and initialize the React root
const domNode = document.getElementById('react-button-root');
if (domNode) {
    const root = ReactDOM.createRoot(domNode);
    root.render(<ConnectButton />);
}
