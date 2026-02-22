# MongoDB CRUD Practice

This repository demonstrates basic **CRUD (Create, Read, Update, Delete)** operations using **MongoDB**.
The project includes scripts that can be executed via **MongoDB Shell** and **VS Code** to interact with the MongoDB server (`mongod`).


## 📌 Project Overview

The purpose of this repository is to practice and understand:

* Connecting to MongoDB
* Performing CRUD operations
* Using MongoDB Shell commands
* Running MongoDB scripts from VS Code
* Basic database manipulation workflows


## 📂 Project Structure

mongodb_practice/

│

├── 01_setup.mongodb.js      # Database and collection setup

├── 02_reading.mongodb.js    # Read operations

├── 03_update.mongodb.js     # Update operations

├── 04_delete.mongodb.js     # Delete operations

├── playground-1.mongodb.js  # Experimental queries

└── README.md



## ⚙️ Prerequisites

Make sure you have the following installed:

* MongoDB Community Server
* MongoDB Shell (`mongosh`)
* VS Code
* MongoDB VS Code Extension (recommended)


## 🚀 How to Run

### Step 1: Start MongoDB Server

```bash
mongod
```


### Step 2: Open MongoDB Shell

```bash
mongosh
```


### Step 3: Run Scripts in VS Code

You can run the `.mongodb.js` files using:

* MongoDB VS Code Extension (recommended), or
* Copy–paste commands into `mongosh`


## 🧪 CRUD Operations Covered

### ✅ Create (Setup)

File: `01_setup.mongodb.js`

* Creates database
* Creates collection
* Inserts sample documents


### 🔍 Read

File: `02_reading.mongodb.js`

* Find all documents
* Find with conditions
* Projection examples


### ✏️ Update

File: `03_update.mongodb.js`

* Update one document
* Update multiple documents
* Use of `$set` operator


### ❌ Delete

File: `04_delete.mongodb.js`

* Delete one document
* Delete many documents


## 🛠 Tools Used

* MongoDB
* mongosh
* VS Code
* MongoDB VS Code Extension


## 🎯 Learning Outcomes

After completing this repo, you will understand:

* Basic MongoDB workflow
* CRUD operations in MongoDB
* How to run MongoDB scripts in VS Code
* How MongoDB Shell interacts with `mongod`


## 👤 Author

**Prakhar Saxena**
B.Tech AI Student | MongoDB Learner


## ⭐ Future Improvements

* Add aggregation examples
* Add indexing examples
* Add Node.js + MongoDB integration
* Add MongoDB Compass screenshots
t say the word 👍


