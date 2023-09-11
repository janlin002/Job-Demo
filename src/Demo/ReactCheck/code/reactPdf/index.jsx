import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
  pdf,
} from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import { Typography } from "@material-ui/core";

// eslint-disable-next-line react/prop-types
const DocumentPdf = ({ someString }) => (
  <Document>
    <Page>
      <Text>Hey look at this string: {someString}</Text>
    </Page>
  </Document>
);

const delay = (t) => new Promise((resolve) => setTimeout(resolve, t));

async function getProps() {
  await delay(1_000);
  return {
    someString: "You waited 1 second for this",
  };
}

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    // flexGrow: 1,
    // width: 250,
    // height: 100,
  },
});

// Create Document Component
const MyDoc = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>
          Section #1 Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Praesentium repellendus nostrum nam, neque alias voluptatibus adipisci
          quibusdam vero temporibus? Necessitatibus id dolores veniam, explicabo
          quasi consequatur delectus mollitia. Tempore, ab. Obcaecati id
          quibusdam, eum fuga in magni cumque sunt debitis assumenda aut quae
          vel reprehenderit vitae accusantium odit dignissimos illo eligendi
          earum, optio possimus nemo? Consequatur molestias ad nisi ex! Culpa
          officia ut ratione minus ex perferendis aspernatur, delectus
          cupiditate assumenda? Deserunt pariatur totam ducimus magni tempora
          odio fugit illo, fugiat dicta laborum excepturi asperiores quis nam.
          Assumenda, harum deserunt. Quam, mollitia iure expedita ex veritatis
          placeat reiciendis aliquam! Hic corporis possimus at error, maxime
          alias veniam laborum quibusdam ratione natus reiciendis illo quia
          ducimus. Earum animi nesciunt aliquam maxime! Saepe quisquam nesciunt,
          quaerat fuga nostrum perferendis ut aspernatur molestias deserunt quo?
          Mollitia nesciunt, ipsum magnam et debitis animi iusto sunt, neque
          quae, reprehenderit iure eligendi at beatae totam suscipit! Blanditiis
          eaque quidem est, numquam enim dolore a inventore reprehenderit nihil
          optio quis explicabo minus! Omnis cupiditate corporis tempore sed
          quae, eaque beatae quasi nisi reprehenderit incidunt molestiae quas?
          Mollitia! Voluptate, suscipit natus adipisci laudantium quod ipsam
          sapiente officia ipsum ad tempore, fugiat debitis expedita esse dolor
          perferendis. Maxime!
          {/* <Button>點擊啊啊啊啊啊</Button> */}
        </Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
    <Page>
      <View>
        <Text>123</Text>
      </View>
    </Page>
  </Document>
);

const Index = () => {
  console.log("123");

  //   const previewDocument = (content) => {
  //     const pdfDocGenerator = pdfMake.createPdf(content);
  //     // Get PDF blob and open in new window
  //     pdfDocGenerator.getBlob((blob) => {
  //       let blobURL = URL.createObjectURL(blob);
  //       window.open(blobURL);
  //     });
  //   };
  const BlobPreviewPdf = (res) => {
    let url = window.URL.createObjectURL(
      new Blob([res], { type: "application/pdf" })
    );

    window.open(url, "_blank");
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      {/* <PDFDownloadLink document={<MyDoc />} fileName="somename.pdf">
        {({ blob, url, loading, error }) => (
          //   loading ? "Loading document..." : "Download now!"
          <button>點擊下載</button>
        )}
      </PDFDownloadLink> */}
      <button
        onClick={async () => {
          console.log("123");
          const props = await getProps();
          const doc = <MyDoc {...props} />;
          const asPdf = pdf([]);
          asPdf.updateContainer(doc);
          const blob = await asPdf.toBlob();
          BlobPreviewPdf(blob);
          //   window.open(blob, "_black");
          //   URL.createObjectURL(blob);
          //   saveAs(blob, "document.pdf");
        }}
      >
        點擊下載PDF
      </button>
    </div>
  );
};

export default Index;
