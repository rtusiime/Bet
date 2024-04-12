import React, { useState, useEffect } from 'react';
import './CreatePost.css'
import supabase from '../client';

const CreatePost = () => {

    const [post, setPost] = useState({ title: "", author: "", description: "" });

    const createPost = async (event) => {
        // console.log('calling create post');
        event.preventDefault();
        // const descr = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';
        // const posts = [
        //     {
        //     'title': 'Cartwheel in Chelsea 🤸🏽‍♀️',
        //     'author':'Harvey Milian', 
        //     'description': descr},
        //     {
        //     'title': 'Love Lock in Paris 🔒',
        //     'author':'Beauford Delaney', 
        //     'description':descr},
        //     {
        //     'title': 'Wear Pink on Fridays 🎀',
        //     'author':'Onika Tonya', 
        //     'description':descr},
        //     { 
        //     'title': 'Adopt a Dog 🐶',
        //     'author':'Denise Michelle', 
        //     'description':descr},
        // ]
        const { data, error } = await supabase
            .from('Posts')
            .insert(
                { title: post.title, author: post.author, description: post.description })
            .select();
        if (error) {
            console.log(error);
        }
        else {
            console.log('Post created successfully ', data);
        }
        console.log(data)
        window.location = '/';
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        // console.log("name: ", name, "value: ", value);
        setPost((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    return (
        <div>
            <form>
                <label for="title">Title</label> <br />
                <input type="text" id="title" name="title" onChange={handleChange} /> <br />
                <br />

                <label for="author">Author</label><br />
                <input type="text" id="author" name="author" onChange={handleChange} /> <br />
                <br />

                <label for="description">Description</label> <br />
                <textarea rows="5" cols="50" name="description" onChange={handleChange}>
                </textarea>
                <br />
                <input type="submit" value="Submit" onClick={createPost} />
            </form>
        </div>
    )
}

export default CreatePost