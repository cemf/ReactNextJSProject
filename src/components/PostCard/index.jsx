import React from "react";

export const PostCard = ({title, cover, body, id})=> (
        <div className="post">
          <img src={cover} alt={title} />
          <div id ={id} key={id} className="post-content">
            <h2>{title} {id}</h2>
            <p>{body}</p>      
          </div>
        </div>
);
      //     //recebe 
      //     {
      //     'id'='123456',
      //     'cover'='url',
      //     'title'='titulo'
      //     'body'='texto legenda da imagem'
      //     }