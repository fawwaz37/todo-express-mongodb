# **ToDo List App**

Todo App With Login System, Built using MongoDB , Express.js , and Node.js

Demo App:
https://zekais-todo.herokuapp.com/

# Installation
## Cloning this repo
```cmd
> git clone https://github.com/fawwaz37/todo-express-mongodb.git
> cd todo-express-mongodb
```

## Editing the file
Edit the required value in folder `controllers` file `config.js`.

```js
module.exports = {
    port: '3030', // http://localhost:3030 
    dbURI: 'mongodb+srv://xxx' 
}
```

`port`: PORT localhost.

`dbURI`: your MongoDb URI. 

## How to Get Mongodb URI
1. Sign In [Mongodb](https://www.mongodb.com/)
2. Create a Database.
<img src="https://i.postimg.cc/R0D16X3C/1.png" width="300">

3. Create Free Cluster.
4. Choose Cloud Provider & Region.
5. Select `Connect`.
6. Add a Connection IP Address.
<img src="https://i.postimg.cc/gk1H2MZY/5-1.png" width="500">

7. Create a Database User
<img src="https://i.postimg.cc/T1zCLGPc/5-2.png" width="500">

8. Choose Connect Your Application
9. Change `<password>` with Your Password Database User `step 7`
<img src="https://i.postimg.cc/6pW4wgW2/db.png" width="500">

## Installing the dependencies
```cmd
> npm install
```

## Running App
```cmd
> npm start
```

Then Browse http://localhost:3030 . You will see the Homepage.

<img src="https://i.postimg.cc/nrdbmXmt/end.png" width="500">
