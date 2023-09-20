<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Disaster</title>
    <link rel="stylesheet" href="dis1.css"> 
</head>
<body>
    
        <a href="index.html" class="btn-home">Home</a>
        <h1>Location Details</h1>
        <p>Enter your location to get details of contacts from your local area:</p>
    
        <form action="contact.html" method="post">
            <label for="city">City:</label>
            <select id="city" name="city">
                <option value="mum">Mumbai</option>
                <option value="del">Delhi</option>
                <option value="kol">Kolkata</option>
            </select>
            <br>
            <input type="submit" value="Submit">
        </form>

        <div class="Contact-details"><?php
            // Ensure you have a database connection established here
            $servername = "localhost";
            $username = "root";
            $password = "";
            $dbname = "contact_details";
            
            // Select data from the database (replace 'your_table' with your actual table name)
            $conn = new mysqli($servername, $username, $password, $dbname);
            
            
            $sql = "SELECT * FROM contacts";
            
            // Execute the SQL query
            $result = $conn->query($sql);
            
            // Display the data
            if ($result->num_rows > 0) {
                echo "<h2>Database Records:</h2>";
                while ($row = $result->fetch_assoc()) {
                    echo "Name: " . $row["Name of Authority"] . "<br>";
                    echo "Phone: " . $row["Contact Number"] . "<br><br>";
                }
            } else {
                echo "No records found.";
            }
            
            // Close the database connection
            $conn->close();
            
            ?></div>
    
   
</body>
</html>
