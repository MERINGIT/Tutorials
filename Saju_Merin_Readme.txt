# Tutorial 4

This is a simple React application that allows users to Login with their credentials,Upon successful login ,the user can view the profiles in a grid layout,the users are also able to see individual profile upon clicking each profile.

## Features

- Responsive and aesthetically pleasing UI
- Client-side form validation
- Profile Login with email and password
- Redirect to profile Listing page upon successful Login
- Redirect to individual profile detailed page upon clicking the card component

## Author

- [Merin Mary Saju](mr457277@dal.ca)

## GitHub Repository

[GitLab Repository Link](https://git.cs.dal.ca/msaju/csci-5709-tutorials/-/tree/main/tutorial4?ref_type=heads)

## Deployment

[Deployment Link](https://tutorials-5rfy.vercel.app/)

## Code References and Important Code Snippets

### Navigation

```jsx

<Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profiles" element={<ProfileList />} />
        <Route path="/profiles/:id" element={<ProfileDetail />} />
      </Routes>
</Router>

```

- To Study how react-router dom works and how to do routing in react,I used this [link](https://reactrouter.com/en/main/route/route) as reference 


### Form Validation using js

```jsx
//email validation
const validateEmail = () => {
    if (!email) {
      setEmailError('Email is required');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Email is invalid');
    } else {
      setEmailError('');
    }
  };
//password validation
  const validatePassword = () => {
    if (!password) {
      setPasswordError('Password is required');
    } else if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
    } else {
      setPasswordError('');
    }
  };

  const validateForm = () => {
    if (emailError || passwordError || !email || !password) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }

```

- For form validation using javascript ,I used this [link](https://www.geeksforgeeks.org/how-to-validate-form-using-regular-expression-in-javascript/) as reference

### Navigation to profile Listing page and calling API to check the correct credentials

```jsx
//submitting the form and checking the credentials with axios post

const handleSubmit = async (e) => {
    e.preventDefault();
    if (formValid) {
      try {
        const response = await axios.post('https://express-t4.onrender.com/api/login', {
          username: 'testemail@dal.ca',
          password: 'Test@123',
        });
        console.log('Response:', response.data); 

        navigate('/profiles'); 
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      console.error('Form is not valid');
    }
  };

```
- For Navigation between pages I used navigate function and followed this [link](https://reactnavigation.org/docs/navigating/) for reference and for axios request I used this [link](https://axios-http.com/docs/intro) for reference.

### API Call to get all the profile user

```jsx

   //for getting all the user profiles
   useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://express-t4.onrender.com/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Failed to fetch users', error);
      }
    };
    fetchUsers();
  }, []);

```

- For axios Get request I used this [link](https://axios-http.com/docs/intro) for reference.

### API Call to get the individual profile user

```jsx
  //for getting the individual profile

   useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://express-t4.onrender.com/api/users/${id}`);
        setUser(response.data);
      } catch (error) {
        console.error('Failed to fetch user details', error);
      }
    };
    fetchUser();
  }, [id]);

```

- For axios Get request with parameter I used this [link](https://axios-http.com/docs/intro) for reference.

### Used Card Component to show the list of users



```jsx
   //in prfile listing page
   <div className="profile-list">
        {filteredUsers.map((user) => (
          <UserCard key={user._id} user={user} />
        ))}
      </div>
      //card component

  const UserCard = ({ user }) => {
  const { _id, picture, name, email, phone, address, company } = user;

  return (
    <Link to={`/profiles/${_id}`} className="user-card">
      <img src={picture} alt={`${name}`} />
      <div className="user-card-details">
        <h3>{name}</h3>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Company: {company}</p>
      </div>
    </Link>
  );
};

```




