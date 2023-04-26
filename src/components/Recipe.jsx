import React from "react";
import { Link } from "react-router-dom";

function Recipe({ id, image, title, summary }) {
  return (
    <article className="recipe">
      <div>
        <img src={image} alt="recipe image" />
      </div>
      <div>
        <h3>{title}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis odio
          vitae nulla enim, ex voluptates cumque asperiores quas recusandae
          fugiat dolores illum tempore itaque dolore, magnam quisquam, deleniti
          earum quod?
        </p>
        <Link to={`/recipe/${id}`} className="btn-primary recipe-btn">
          View Recipe
        </Link>
      </div>
    </article>
  );
}

export default Recipe;
