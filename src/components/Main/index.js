import articles from "../../libs/articles";
import Article from "../Article";
import css from "./main.module.css";

function Main() {
  return (
    <main className={css.container}>
      <h1>WikiPigeon</h1>
      {articles.map((article) => {
        return (
          <Article
            key={article.id}
            title={article.title}
            paragraphs={article.paragraphs}
            comments={article.comments}
          />
        );
      })}
    </main>
  );
}

export default Main;
