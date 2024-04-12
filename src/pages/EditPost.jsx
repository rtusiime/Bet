import { React, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import './EditPost.css'
import supabase from '../client'

const EditPost = () => {
    // const fetchPostById = async (postId) => {
    //     const { data, error } = await supabase
    //         .from('Posts')
    //         .select()
    //         .eq('id', postId)
    //         .single();
    // }

    const { id } = useParams();
    const data = useLocation().state;
    const [post, setPost] = useState({ id: id, title: data.title, author: data.author, description: data.description });

    const updatePost = async (event) => {
        event.preventDefault();

        const { data, error } = await supabase
            .from('Posts')
            .update({ title: post.title, author: post.author, description: post.description })
            .eq('id', id)
        if (error) {
            console.log(error);
        }
        else {
            console.log('Post updated successfully ', data);
        }
        console.log(data)
        window.location = '/';
    }

    const deletePost = async (event) => {
        event.preventDefault();

        const { data, error } = await supabase
            .from('Posts')
            .delete()
            .eq('id', id);
        if (error) {
            console.log(error);
        }
        else {
            console.log('Post deleted successfully ', data);
        }
        console.log(data)
        window.location = '/';
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
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
                <input type="text" id="title" name="title" value={post.title} onChange={handleChange} /><br />
                <br />

                <label for="author">Author</label><br />
                <input type="text" id="author" name="author" value={post.author} onChange={handleChange} /><br />
                <br />

                <label for="description">Description</label><br />
                <textarea rows="5" cols="50" name="description" value={post.description} onChange={handleChange} >
                </textarea>
                <br />
                <input type="submit" value="Submit" onClick={updatePost} />
                <button className="deleteButton" onClick={deletePost}>Delete</button>
            </form>
        </div>
    )
}

export default EditPost