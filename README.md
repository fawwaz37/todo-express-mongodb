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
Edit the required value in folder controllers file `config.js`.

```js
module.exports = {
    port: '3030', // http://localhost:3030 
    dbURI: 'mongodb+srv://xxx' 
}
```

`port`: PORT localhost.

`dbURI`: your MongoDb URI. 

## Installing the dependencies
```cmd
> npm install
```

## Running App
```cmd
> npm start
```

Then Browse http://localhost:3030 . You will see the Homepage.
