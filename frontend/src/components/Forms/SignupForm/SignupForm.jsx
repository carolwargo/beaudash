/* SignupForm.jsx */
import * as React from 'react';
import './SignupForm.css'; // Import CSS specific to this component
import CustomSocialIcons from '../CustomSocialIcons/CustomSocialIcons'; // Import CustomSocialIcons component

export default function SignupForm() {
  const [formData, setFormData] = React.useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
    rememberMe: false,
  });

  const [error, setError] = React.useState('');

  // Handle input changes (email, password, etc.)
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Form validation
    if (!formData.email || !formData.password) {
      setError('Please fill out both fields.');
      return;
    }

    // Dummy submit logic (You can replace this with your actual API call)
    if (formData.email === 'test@test.com' && formData.password === 'password') {
      alert('Form submitted successfully!');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };


  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
        <h1 className="form-title">Welcome!</h1>
        <p className="form-subtitle">Setup an your account to get started.</p>

        <div className="row">
          <div className="col">
            <div className="form-group">
              <label 
              htmlFor="signupFirstname"
              className='w3-hide-small w3-hide-medium'>
                First Name</label>
              <input
                type="text"
                id="signupFirstname"
                name="firstname"
                className="form-input"
                placeholder="Jane"
                autoComplete="firstname"
                autoFocus
                value={formData.firstname}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="col">
            <div className="form-group">
              <label 
              htmlFor="signupLastname"
              className='w3-hide-small w3-hide-medium'
              >Last Name</label>
              <input
                type="text"
                id="signupLastname"
                name="lastname"
                className="form-input"
                placeholder="Doe"
                autoComplete="lastname"
                autoFocus
                value={formData.lastname}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <label 
          htmlFor="signupEmail"
          className='w3-hide-small w3-hide-medium'>
            Email address</label>
          <input
            type="email"
            id="signupEmail"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            autoComplete="email"
            autoFocus
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label 
          htmlFor="signupPassword"
          className='w3-hide-small w3-hide-medium'>
            Password</label>
          <input
            type="password"
            id="signupPassword"
            name="password"
            className="form-input"
            placeholder="Enter your password"
            autoComplete="current-password"
            autoFocus
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label 
          htmlFor="signupConfirmPassword"
          className='w3-hide-small w3-hide-medium'>
            Re-Enter to confirm password</label>
          <input
            type="password"
            id="signupConfirmPassword"
            name="confirm-password"
            className="form-input"
            placeholder="Re-enter password"
            autoComplete="confirm-password"
            autoFocus
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <div className="form-col left">
            <label className="form-checkbox">
            <input
  type="checkbox"
  id="signupRememberMe"
  name="rememberMe"
  checked={formData.rememberMe}
  onChange={handleChange}
/>

              <span>Remember me</span>
            </label>
          </div>
 
        </div>

        {error && <div className="form-error">{error}</div>}

        <button type="submit" className="form-button">Register Now</button>

        <div className="form-footer">
          <p>Already have an account? <a href="#!" className="form-link">Login</a></p>
          <p>or sign up with:</p>
     <CustomSocialIcons /> {/* Include the CustomSocialIcons component */} 
        </div>
      </form>
    </div>
  );
}