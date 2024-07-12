# Java Spring Boot Application

Welcome to the Java Spring Boot Application! This project demonstrates basic CRUD operations using Spring Boot for managing user profiles.

## Features

- **RESTful APIs**: Implement CRUD operations for managing user profiles.
- **Database**: Connect to MongoDB for storing user data.
- **Error Handling**: Handle common HTTP errors (404, 400, 500) with appropriate JSON responses.
- **Deployment**: Deployed on a Render for testing purposes.

## Author

- **Merin Mary Saju**
- Contact: [mr457277@dal.ca](mailto:mr457277@dal.ca)

## GitHub Repository

Find the code for this project on GitLab: [GitLab Repository Link](https://git.cs.dal.ca/msaju/csci-5709-tutorials/-/tree/main/tutorial5/demo?ref_type=heads)

## Deployment URL

Here is the Deployment Link: [Render Link](https://my-java-image-latest.onrender.com)

## Technologies Used

- **Java Spring Boot**: Backend framework
- **MongoDB**: NoSQL database for data storage
- **Postman**: API testing and documentation
- **IntelliJ IDEA**: Integrated development environment (IDE)

## Installation

1.**Clone the repository**

   ```bash
   git clone git@git.cs.dal.ca:msaju/csci-5709-tutorials.git
   cd csci-5709-tutorials/tutorial5/demo
   ```

2.**Set up MongoDB**

```bash

use a remote MongoDB service.
Update the application.properties file with your MongoDB URI.
```
3.**API Endpoints**

- Get: https://my-java-image-latest.onrender.com/users -Retrieves all users
```bash
Sample Success Response :
{
message : “Users retrieved”,
success : true,
users : [{
email : “abc@abc.ca”,
firstName : “ABC”,
id : “5abf6783”
},
{
email : “xyz@xyz.ca”,
firstName: “XYZ”,
id : “5abf674563”
}]
}
```

- Post: https://my-java-image-latest.onrender.com/add -Post a User
```bash
body data:
{
email : “xyz@xyz.ca”,
firstName: “XYZ”,
}
Sample Success Response:
{
message : “User added”,
success : true
}
```
- Put: https://my-java-image-latest.onrender.com/update/{id} -Update a user

```bash
body data:
{
email : “xyz@xyz.ca”,
firstName: “XYZ”,
}
Sample Success Response :
{
message : “User updated”,
success : true
}
```
- Get: https://my-java-image-latest.onrender.com/user/{id} -Return a single object

```bash

Sample Success Response :
{
success : true,
user : {
email : “xyz@xyz.ca”,
firstName: “XYZ”,
id : “5abf674563”
}
}

```

4.**Project Structure**
- controller/: Contains REST controller classes.
- model/: Contains entity classes representing MongoDB documents.
- repository/: Contains Spring Data MongoDB repository interfaces.
- service/: Contains service classes implementing business logic.
- DemoApplication.java: Main application class.

4.**Code Snippets**

- Controller

 ```bash
@RestController
@RequestMapping("/")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<User> getUserById(@PathVariable String id) {
        User user = userService.getUserById(id);
        return ResponseEntity.ok(user);
    }

    @PostMapping("/add")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        User newUser = userService.createUser(user);
        return ResponseEntity.ok(newUser);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<User> updateUser(@PathVariable String id, @RequestBody User userDetails) {
        User updatedUser = userService.updateUser(id, userDetails);
        return ResponseEntity.ok(updatedUser);
    }

}
```

- Service

 ```bash
 @Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(String id) {
        Optional<User> user = userRepository.findById(id);
        return user.orElse(null);
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public User updateUser(String id, User userDetails) {
        Optional<User> optionalUser = userRepository.findById(id);
        if (optionalUser.isPresent()) {
            User existingUser = optionalUser.get();
            existingUser.setFirstName(userDetails.getFirstName());
            existingUser.setLastName(userDetails.getLastName());
            existingUser.setEmail(userDetails.getEmail());
            return userRepository.save(existingUser);
        } else {
            return null; // Handle not found scenario
        }
    }

   
}

 ```

- Repository
```bash
public interface UserRepository extends MongoRepository<User, String> {
    // Methods provided by Spring Data MongoDB
}

```

- Model
 ```bash
 @Document(collection = "users")
public class User {

    @Id
    private String id;
    private String firstName;
    private String email;

    // Constructors, getters, setters
}

 ```