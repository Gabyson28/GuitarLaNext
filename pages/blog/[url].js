import React from "react";
import Layout from "@/components/layout";
import Image from "next/image";
import styles from "../../styles/blog.module.css";
import { dateFormat } from "@/utils/helpers";
export default function Post({ post }) {
  const { contenido, imagen, titulo, url, publishedAt } = post[0].attributes;
  return (
    <Layout title={titulo}>
      <article className={`${styles.post} ${styles["mt-3"]}`}>
        <Image
          src={imagen.data.attributes.url}
          alt={`imagen blog ${titulo}`}
          width={1000}
          height={400}
        ></Image>
        <div className={styles.contenido}>
          <h3>{titulo}</h3>
          <p className={styles.fecha}>{dateFormat(publishedAt)}</p>
          <p className={styles.texto}>{contenido}</p>
        </div>
      </article>
    </Layout>
  );
}

export async function getServerSideProps({ query: { url } }) {
  const response = await fetch(
    `${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`
  );
  const { data: post } = await response.json();

  return {
    props: {
      post,
    },
  };
}
