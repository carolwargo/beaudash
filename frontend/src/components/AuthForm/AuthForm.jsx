import { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './AuthForm.css'; // Import CSS for styling

const AuthForm = ({ isLogin }) => {
    const [isLoginMode, setIsLoginMode] = useState(isLogin); // Rename state to avoid shadowing prop
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:3000/${isLoginMode ? 'login' : 'register'}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                navigate('/'); // Redirect to home page on success
            } else {
                alert('Error: ' + response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleToggle = () => {
        setIsLoginMode(!isLoginMode); // Toggle between login and register
        setUsername('');
        setPassword('');
    };

    return (
        <div className='auth-page'>
        <div className="auth-form">
            <h1>{isLoginMode ? 'Login' : 'Register'}</h1>

            <form onSubmit={handleSubmit}>
                <div>
                 
                    <input
                    placeholder='email@mail.com'
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                
                    <input
                        placeholder='********'
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit"
                style={{boxShadow:' 0 4px 8px rgba(0, 0, 0, 0.5)'}}>{isLoginMode ? 'Login' : 'Register'}</button>
            </form>

            <p>
                {isLoginMode ? 'No account?' : 'Already have an account?'}{' '}
                <button onClick={handleToggle}>
                    {isLoginMode ? 'Register' : 'Login'}
                </button>
            </p>
        </div>
        </div>
    );
};

AuthForm.propTypes = {
    isLogin: PropTypes.bool.isRequired,
};

AuthForm.defaultProps = {
    isLogin: false,
};

export default AuthForm;





