"""Database Module"""

from pymongo import MongoClient

# Connecting to MongoDB database
MONGO_URL = "mongodb://localhost:27017"
client = MongoClient(MONGO_URL)
db = client["telegram-bot"]


def insert_user(user):
    """Inserts user into users collection

    Args:
        user (dict): User data

    Returns:
        ObjectId: Object ID into collection
    """
    users = db.users
    user_id = users.insert_one(user).inserted_id

    return user_id
