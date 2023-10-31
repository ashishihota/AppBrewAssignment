# AppBrewAssignment
    The entry point of this project is the index.js file.
    Link -> https://appbrew-rn27.onrender.com
    ex -> https://appbrew-rn27.onrender.com/api/book

## How this project is setup
    The Tech Stack used in this project is NodeJs with Express and MongoDb with Mongoose. 
    Nodejs for our server and Mongoose for database. I am not using any security measures since they were not instructed in the assignment.
    
## Dependencies used
> 1. Express
> 2. Dotenv
> 3. Mongoose
> 4. Nodemon (for dev use)
>

## Api End points
    All apis have a prefix /api route which defines that this is an api route. 
    
### /book - (Get)
> This end point will fetch all the books avaialble in the database. It will give you the "title", "Discription", "Author", and timestamps.

### /book/:id - (Get)
> This will get you the book with the provied "id". If there is no such book, it will return you a 200 status with msg saying : "No book with this id exist".

### /book - (Post) 
> If you want to add a book to this db, you can use this end point. It requires 3 fields and the data should be in JSON format.

    {
        title : string,
        author : string,
        desc : string
    }
> here desc is the summary of the book. 
> If there is already a book with same title, it will not re add that book but will ask you to change the title.

### /book/:id - (Put)
> If you want to update data for a book which already exists in the database, you can use this.

>you will need the id of the book which you can get from database using the get book api. It asks for the same payload as the Post book api.

### /book/:id - (Delete)
> If you want to delete a book, pass the book id to this end point.
