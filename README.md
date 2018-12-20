![CF](http://i.imgur.com/7v5ASc8.png) LAB: Async
=================================================

## Lab 03

### Author: Fletcher LaRue

### Links and Resources

[![Build Status](https://www.travis-ci.com/asdFletcher/03-async.svg?branch=master)](https://www.travis-ci.com/asdFletcher/03-async)

* [repo](https://github.com/asdFletcher/03-async)
* [travis](https://www.travis-ci.com/asdFletcher/03-async)

--- 

---

---

[//]: # (heroku link: https://lab02-401.herokuapp.com/)

---
### Modules
#### `list-constructor.js`s
#### `vehicle-class.js`
#### `vehicle-constructor.js`
#### `vehicle-factory.js`
#### `flying-vehicle-class.js`
#### `flying-vehicle-constructor.js`
#### `flying-vehicle-factory.js`
---
##### Exported Values and Methods for the following modules:
- #### `vehicle-class.js`
- #### `vehicle-constructor.js`
- #### `vehicle-factory.js`


* Vehicle
    * Methods:
        * `constructor(name, wheels)`
        * `drive()`
        * `stop()`
    * Attributes:
        * `name`
        * `wheels`

The following objects extend the Vehicle object:
* Car
    * Methods:
        * constructor(name)
        * `drive()`
        * `stop()`
    * Attributes:
        * `name`
        * `wheels: 4`

* Motorcycle
    * Methods:
        * `constructor(name)`
        * `drive()`
        * `stop()`
        * `wheelie()`
    * Attributes:
        * `name`
        * `wheels: 2`

---


##### Using the following modules:
- #### `vehicle-class.js`
- #### `vehicle-constructor.js`
- #### `vehicle-factory.js`


Car Methods:
* `constructor(name)`
    * Takes a name and creates a Car object with that name
    * Requires tha a name be passed in
    * Automatically sets `wheels: 4`
* `drive()`
    * call the drive method to move the car
    * accepts no arguments
* `stop()`
    * call the drive method to stop the car
    * accepts no arguments


Motorcycle:
Identical to the Car object except that it has a `wheelie` method
* `constructor(name)`
    * Takes a name and creates a Car object with that name
    * Requires tha a name be passed in
    * Automatically sets `wheels: 4`
* `drive()`
    * call this method to move the car
    * accepts no arguments
* `stop()`
    * call this method to stop the car
    * accepts no arguments
* `wheelie()`
    * call this method to do a wheelie
    * accepts no arguments

---

### Testing

TODO: fill out testing instructions
TODO: fill out testing methodology

---

### 
