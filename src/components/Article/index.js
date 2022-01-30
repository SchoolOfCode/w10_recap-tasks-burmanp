import { useState } from "react";
import CommentSection from "../Comment";
import css from "./article.module.css";
import { Button, Divider, Drawer } from "antd";

function Article({ title, paragraphs, comments }) {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <article className={css.post}>
      <Divider orientation="left">
        <h2 className={css.postTitle}>{title}</h2>
      </Divider>

      {paragraphs.map((para) => (
        <p key={para.id} className={css.para}>
          {para.text}
        </p>
      ))}

      <div className={css.btn}>
        <Button type="primary" shape="round" size="large">
          Like 👍
        </Button>
        <Button type="primary" shape="round" size="large" onClick={showDrawer}>
          Show comments...
        </Button>
      </div>
      <Drawer
        title="Comments"
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <CommentSection comments={comments} />
      </Drawer>
    </article>
  );
}

export default Article;
