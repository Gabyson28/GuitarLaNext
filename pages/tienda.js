import Layout from "@/components/layout";
import Guitarra from "@/components/guitarra";
import styles from "../styles/grid.module.css"

export default function Tienda({ guitarras }) {
  console.log(guitarras);
  return (
    <Layout title={"Tienda Virtual"} description="Tienda">
      <main className="contenedor">
        <h1 className="heading">Nuestra Colección</h1>
        <div className={styles.grid}>
        {guitarras?.map((guitarra) => (
          <Guitarra key={guitarra.id} guitarra={guitarra.attributes}></Guitarra>
        ))}
        </div>
      </main>
    </Layout>
  );
}

// export async function getStaticProps() {
//   const response = await fetch(
//     `${process.env.API_URL}/guitarras?populate=imagen`
//   );
//   const { data } = await response.json();
//   console.log(data);
//   return {
//     props: {
//       data,
//     },
//   };
// }

export async function getServerSideProps() {
  const response = await fetch(
    `${process.env.API_URL}/guitarras?populate=imagen`
  );
  const { data: guitarras } = await response.json();

  return {
    props: {
      guitarras,
    },
  };
}
