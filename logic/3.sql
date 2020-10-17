SELECT users.name, rides.distance AS distance_traveled, rides.fare AS total_fares FROM users JOIN rides ON users.id = rides.user_id ORDER BY rides.distance DESC LIMIT 10