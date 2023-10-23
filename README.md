# Social Network API

## Description

This is a Social Network API that uses MongoDB for its speed with large amounts of data and flexibility with unstructured data. This app allows users to create, read, update, and delete posts, as well as react to other posts and add another user as a friend.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)


## Installation

- Install npm i for necessary dependencies (express, mongoose).
- Run seeded data file using the 'npm run seed' command in the root folder.
- Run the server using the 'npm run dev' command in the root folder.
- Use Insomnia to test api routes!

## Usage

Once the user has seeded the database and started the server, they can open Insomnia and test the routes. The user can test their GET routes for all users and thoughts, as well as single users and thoughts. Once this is fetched, the user should recieve the data for each route displayed in a formatted JSON. Additionally, the user can test their POST routes to create a new thought, reaction or add a friend. The PUT routes can be tested by updating a user, thought, or reaction. Finally, the DELETE routes can be tested with removing a user, thought, reaction, or friend.

[Back-end Tutorial]([https://drive.google.com/file/d/1w--seJ5dBPWHFLHl6a-NAT_pghcS3tX5/view](https://watch.screencastify.com/v/gRvSuLP0sq9Kf3K9RyHn)

## Credits

[MongoDB Documentation](https://www.mongodb.com/docs/atlas/)

## License

MIT License

Copyright (c) 2023 Caitlin Ash

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
