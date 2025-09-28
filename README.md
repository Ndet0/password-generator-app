# CyberGuard Password Generator

A simple, client-side web application for generating strong, secure passwords and managing user accounts. This project demonstrates HTML, CSS, JavaScript, DOM manipulation, and basic user authentication using localStorage.

## Features

- **User Registration**: Sign up with your name and email to create an account. A strong password is automatically generated and assigned.
- **User Login**: Sign in using your email and the generated password.
- **Password Retrieval**: Forgot your password? Click the link to retrieve it via email prompt.
- **User Dashboard**: After logging in, view your account details and logout securely.
- **Password Generation**: Utilizes an external API for generating secure passwords, with a local fallback if the API is unavailable.
- **Responsive Design**: Clean, user-friendly interface with FontAwesome icons.

## Technologies Used

- **HTML**: Structure of the web pages.
- **CSS**: Styling and responsive design.
- **JavaScript**: Client-side logic, DOM manipulation, and localStorage for data persistence.
- **FontAwesome**: Icons for enhanced UI.
- **External API**: Passwordinator API for password generation (with fallback).

## Setup and Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/password-generator-app.git
   cd password-generator-app
   ```

2. **Open in Browser**:
   - No server setup required. Simply open `index.html` in your web browser.
   - For the best experience, use a modern browser like Chrome, Firefox, or Edge.

## Usage

1. **Sign Up**:
   - Enter your name and email.
   - Click "Sign up" to create an account. A password will be generated and displayed.

2. **Sign In**:
   - Switch to "Sign In" mode.
   - Enter your email and password to log in.

3. **Forgot Password**:
   - Click the "Click here" link under the password field.
   - Enter your email to retrieve your password.

4. **User Dashboard**:
   - After logging in, you'll be redirected to the user details page.
   - View your name and email, then logout if needed.

## Project Structure

- `index.html`: Main landing page with sign-up/sign-in form.
- `user-details.html`: User dashboard after login.
- `index.js`: JavaScript logic for authentication and password generation.
- `style.css`: Stylesheet for the application.
- `ruff.html`: Unused HTML snippet (can be ignored).
- Images: `logo.jpeg`, `back.jpeg`, `back1.jpeg` for branding and background.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

Festus Kisoi
