import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto'>
          <div className='my-5'>
          <h2 className='text-3xl'>What is Cors?</h2>
            <p>
            CORS” stands for Cross-Origin Resource Sharing. CORS is a protocol and security standard for browsers that helps to maintain the integrity of a website and secure it from unauthorized access.
            It enables JavaScripts running in browsers to connect to APIs and other web resources like fonts, and stylesheets from multiple different providers.
            </p>
          </div>
          <div className='my-5'>
            <h2 className='text-3xl' >Why are you using firebase? What other options do you have to implement authentication?</h2>
            <p>
                Basically Firebase Authentication aims to make building secure authentication systems easy, while improving the sign-in and onboarding experience for end users. It provides an end-to-end identity solution, supporting email and password accounts, phone auth, and Google, Twitter, Facebook, and GitHub login, and more.
            </p>
            <p>
            To start integrating Firebase into our app, we require the following:
             1.Access to the firebase console linked with a Google account.
             2. install firebase npm 
             3. Add project
             4.config firebae sdk for react js file
             4. Add authentication for web 
             5. enable user integration
             6. Use firebase Auth for signIn sign out and stateobserver

             
            </p>
          </div>
          <div className='my-5'>
            <h2 className='text-3xl'>How does Private Route Work?</h2>
            <p>
            Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route . So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.
            </p>
          </div>
          <div className='my-5'>
            <h1 className='text-3xl'>What is Node? How does Node work?</h1>
          Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.

            Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request
          </div>
        </div>
    );
};

export default Blog;