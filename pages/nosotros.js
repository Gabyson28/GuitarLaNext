import Layout from "@/components/layout";
import Image from "next/image";
import styles from "../styles/nosotros.module.css";
export default function Nosotros() {
  return (
    <Layout title={"Nosotros"} description="Sobre nosotros">
      <main className="contenedor">
        <h1 className="heading">Nosotros</h1>
        <div className={styles.contenido}>
          <Image
            alt="Nosotros"
            src="/img/nosotros.jpg"
            width={1000}
            height={800}
          ></Image>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius
              eget nisl vitae rhoncus. Vestibulum odio felis, ornare blandit
              sapien tristique, cursus dignissim erat. Aliquam et mi laoreet
              justo convallis porta. Phasellus ornare, purus quis pharetra
              dignissim, lectus sapien varius dui, at molestie augue odio
              ultricies odio.
            </p>
            <p>
              Aenean blandit condimentum tincidunt. Curabitur nisi justo,
              tristique ut pretium quis, volutpat sit amet nulla. Maecenas quis
              metus id nunc pulvinar posuere at id ipsum. Nulla ullamcorper
              accumsan ligula, id ultricies nibh euismod a. Maecenas id eros
              pellentesque, tristique tortor nec, finibus libero. Suspendisse
              posuere nulla eros, nec blandit libero fermentum a. Vivamus enim
              ex, aliquam ac elit in, hendrerit convallis justo.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
