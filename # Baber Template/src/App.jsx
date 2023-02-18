import Hello from './Hello';

function App(props) {
    return (
        <div>
            <Hello />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
