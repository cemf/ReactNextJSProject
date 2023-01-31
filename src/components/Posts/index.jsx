import { PostCard } from '../PostCard';
import React from 'react'
import './styles.css'


export const Posts = ({ posts = []}) =>(
        <div className="posts">
        {posts.map((post) => (
          <PostCard title={post.title}
          id= {post.id}
          key={post.id}
          cover={post.cover}
          body={post.body}
          />
        ))}
      </div>


    )  
