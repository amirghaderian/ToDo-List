import axios from "axios";
import { useEffect, useState } from "react";
import "../../assets/styles/comment.css";

const Comment = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const fetchData =()=> axios
    .get("https://jsonplaceholder.typicode.com/comments").then((response)=>{console.log(response.data.map((i)=>{i.name}));})
    .catch((error)=>{console.log(error)});
    useEffect(()=>{fetchData()},[])
  return (
    <div className="comment">
       
       
      <div>
        <p>name1</p>
        <p>email1</p>
      </div>
      <div>
        <p>name2</p>
        <p>email2</p>
      </div>
      <div>
        <p>name3</p>
        <p>email3</p>
      </div>
    </div>
  );
};

export default Comment;
