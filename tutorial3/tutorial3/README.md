# Profile Registration Application

This is a simple React application that allows users to register their profile with basic details. After successful registration, users are redirected to a profile page displaying their information. The application includes client-side validation using React and React Router v6 for navigation.

## Features

- Responsive and aesthetically pleasing UI
- Client-side form validation
- Profile registration with first name, last name, email, and password
- Redirect to profile page upon successful registration

## Author

- [Merin Mary Saju](mr457277@dal.ca)

## GitHub Repository

[GitLab Repository Link](https://git.cs.dal.ca/msaju/csci-5709-tutorials/-/tree/main/tutorial2?ref_type=heads)

## Deployment

[Deployment Link](https://tutorials-fudx.vercel.app/)

## Code References and Important Code Snippets

### Navigation

```jsx

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Registration />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}


```

- To Study how react-router dom works and how to do routing in react,I used this [link](https://reactrouter.com/en/main/route/route) as reference 


### Form Validation using js

```jsx

const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.match(/^[A-Za-z]+$/)) {
      newErrors.firstName = 'First Name should contain only letters.';
    }
    if (!formData.lastName.match(/^[A-Za-z]+$/)) {
      newErrors.lastName = 'Last Name should contain only letters.';
    }
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = 'Invalid email format.';
    }
    if (formData.password.length < 8) {
      newErrors.password = 'Password should be at least 8 characters long.';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }
}

```

- For form validation using javascript and regex pattern ,I used this [link](https://www.geeksforgeeks.org/how-to-validate-form-using-regular-expression-in-javascript/) as reference

### Navigation to profile page

```jsx

const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate('/profile', { state: formData });
    }
  };

```
- For Navigation between pages I used navigate function and followed this [link](https://reactnavigation.org/docs/navigating/) for reference.Also passed user details  along with the function.

### Taking user details using useLocation

```jsx

  const Profile = () => {
  const location = useLocation();
  const { firstName, lastName, email } = location.state || {};

```

- For taking user details ,which will be passing from registration page,I used useLocation function.I used this [link](https://www.kindacode.com/article/react-router-uselocation-hook-tutorial-and-examples/) for reference.



