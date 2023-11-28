import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/guitarras.module.css";
export default function Guitarra({ guitarra }) {
  const { descripcion, imagen, nombre, url, precio } = guitarra;
  return (
    <div className={styles.guitarra}>
      <Image
        src={imagen.data.attributes.formats.medium.url}
        width={600}
        height={400}
        alt={`Imagen guitarra ${nombre}`}
      ></Image>

      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>${precio}</p>
        <Link legacyBehavior={true} href={`/guitarras/${url}`}>
          <a className={styles.enlace}>Ver Product</a>
        </Link>
      </div>
    </div>
  );
}
