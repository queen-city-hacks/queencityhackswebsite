import Section from "../../components/Section";
import Title from "../../components/Title";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Certificate = () => {
  const [docUrl, setDocUrl] = useState("");
  const router = useRouter();
  const [name, setName] = useState("");
  console.log(router.query);
  // base64 decode the name
  useEffect(() => {
    setName(router.query.name as string);
  }, [router.query.name]);

  useEffect(() => {
    const generatePDF = async () => {
      if (name) {
        const url = "/certif.pdf";

        const existingPdfBytes = await fetch(url).then((res) =>
          res.arrayBuffer()
        );
        const pdfDoc = await PDFDocument.load(existingPdfBytes);
        const helveticaFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);

        const pages = pdfDoc.getPages();
        const firstPage = pages[0];
        const { width, height } = firstPage.getSize();
        const textWidth = helveticaFont.widthOfTextAtSize(name, 40);
        firstPage.drawText(name, {
          x: (width - textWidth) / 2,
          y: height / 2 + 125,
          size: 40,
          font: helveticaFont,
        });

        const pdfBytes = await pdfDoc.save();
        const bytes = new Uint8Array(pdfBytes);
        const blob = new Blob([bytes], { type: "application/pdf" });
        const docUrl = URL.createObjectURL(blob);
        setDocUrl(docUrl);
      }
    };
    generatePDF();
  }, [name]);

  return (
    <Section id="certificate">
      <Title text={"Certificate for " + name} />
      <div className="p-10 text-center">
        <iframe
          src={docUrl}
          title="Certificate"
          className="w-full aspect-[11/8.5]"
        />
        {/* download pdf */}
        <a
          href={docUrl}
          download="certificate.pdf"
          className="inline-block mt-4 px-4 py-2 bg-cyan-500 text-white rounded-md"
        >
          Download
        </a>
      </div>
    </Section>
  );
};

export default Certificate;
