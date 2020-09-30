import React, { useEffect, useState } from "react";
import curriculum from "./curriculum.pdf";
import { Helmet } from "react-helmet";
export default function Curriculum() {
  const [viewpdf, setviewpdf] = useState("pc");
  useEffect(() => {
    if (!(typeof window.orientation == "undefined")) {
      console.log(
        "No hay compatibilidad para abrir este documento pdf , descargalo :D"
      );
      setviewpdf("mobile");

      // document.getElementById('enlaceDescargarPdf').click();
      // window.close();
    }
  }, []);
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="En esta sección encontrarás mi curriculum :)"
        />
        <title>Daniel | Curriculum</title>
      </Helmet>
      {viewpdf === "pc" ? (
        <div style={{ width: "100%", height: "100%", position: "" }}>
          <object
            // eslint-disable-next-line
            aria-labelledby=""
            data={curriculum}
            type="application/pdf"
            width="100%"
            height="100%"
          />
        </div>
      ) : (
        <>
          <p>
            No hay compatibilidad para abrir este documento pdf , descargalo :D
          </p>
          <br />
          <a
            style={{
              textDecoration: "none",
              padding: "10px",
              borderRadius: "5px",
              background: "#2781eb",
              color: "white",
            }}
            href={curriculum}
            target="_self"
            download
          >
            Descargar pdf
          </a>
        </>
      )}
    </>
  );
}
