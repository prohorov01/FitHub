import React from "react";
import "./Blog.css";

function Blog() {
  return (
    <div className="blog bg-blog">
      <h2>Blog</h2>
      <div className="blog-post">
        <h3>Healthy Eating Habits</h3>
        <p>
          In this blog post, we'll discuss the importance of healthy eating
          habits and provide some tips on how to make better food choices.
        </p>
      </div>
      <div className="blog-post">
        <h3>Effective Workout Routines</h3>
        <p>
          Learn about different workout routines that can help you achieve your
          fitness goals. From cardio to strength training, we've got you
          covered.
        </p>
      </div>
      <div className="blog-post">
        <h3>Mindfulness and Fitness</h3>
        <p>
          Discover the connection between mindfulness and fitness. Find out how
          practicing mindfulness can enhance your overall well-being.
        </p>
      </div>
    </div>
  );
}

export default Blog;
