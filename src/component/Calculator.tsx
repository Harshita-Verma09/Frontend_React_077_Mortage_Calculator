import React, { useState } from 'react';

const MortgageCalculator: React.FC = () => {
    const [principal, setPrincipal] = useState<string>('');
    const [rate, setRate] = useState<string>('');
    const [years, setYears] = useState<string>('');
    const [result, setResult] = useState<string | null>(null);

    const calculateEMI = () => {
        const P = parseFloat(principal);
        const annualRate = parseFloat(rate);
        const N = parseInt(years) * 12;
        const r = annualRate / 12 / 100;

        if (P > 0 && r > 0 && N > 0) {
            const numerator = r * Math.pow(1 + r, N);
            const denominator = Math.pow(1 + r, N) - 1;
            const EMI = P * (numerator / denominator);
            setResult(EMI.toFixed(2));
        } else {
            setResult('Invalid input');
        }
    };


    return (
        <div style={styles.wrapper}>
            <div style={styles.container}>
                <h2 style={styles.heading}>Mortgage Calculator</h2>

                <input
                    type="number"
                    placeholder="Loan Amount (₹)"
                    value={principal}
                    onChange={(e) => setPrincipal(e.target.value)}
                    style={styles.input}
                />

                <input
                    type="number"
                    placeholder="Interest Rate (%)"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                    style={styles.input}
                />

                <input
                    type="number"
                    placeholder="Loan Term (Years)"
                    value={years}
                    onChange={(e) => setYears(e.target.value)}
                    style={styles.input}
                />

                <button onClick={calculateEMI} style={styles.button}>
                    Calculate
                </button>

                {result && (
                    <div style={styles.result}>
                        Monthly Payment (EMI): <strong>₹ {result}</strong>
                    </div>
                )}
            </div>
        </div>
    );
};

// Type for inline styles
interface Style {
    [key: string]: React.CSSProperties;
}

const styles: Style = {
    wrapper: {
        height: '100vh',
        backgroundColor: '#121212',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        backgroundColor: '#1e1e1e',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0 0 15px rgba(0,0,0,0.6)',
        textAlign: 'center',
        width: '100%',

        maxWidth: '400px',
    },
    heading: {
        marginBottom: '20px',
        fontWeight: 'bold',
    },
    input: {
        backgroundColor: '#2c2c2c',
        border: '1px solid #555',
        color: '#fff',
        padding: '12px',
        marginBottom: '15px',
        width: '80%',
        maxWidth: '400px',
        fontSize: '16px',
        borderRadius: '8px',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    button: {
        padding: '12px 24px',
        backgroundColor: '#007bff',
        color: '#fff',
        fontSize: '16px',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        marginTop: '10px',
    },
    result: {
        marginTop: '20px',
        fontSize: '18px',
    },
};

export default MortgageCalculator;
