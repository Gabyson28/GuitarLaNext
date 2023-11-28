import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/blog.module.css";
import { dateFormat } from "@/utils/helpers";
export default function Post({ post }) {
  const { contenido, imagen, titulo, url, publishedAt } = post;
  return (
    <article>
      <Image
        src={imagen.data.attributes.formats.medium.url}
        alt={`imagen blog ${titulo}`}
        width={600}
        height={400}
      ></Image>
      <div className={styles.contenido}>
        <h3>{titulo}</h3>
        <p className={styles.fecha}>{dateFormat(publishedAt)}</p>
        <p className={styles.resumen}>{contenido}</p>
        <Link legacyBehavior={true} href={`/blog/${url}`}>
          <a className={styles.enlace}>Leer Post</a>
        </Link>
      </div>
    </article>
  );
}
