/*OCR de imagens (não está funcionanado de forma correta, possue uma taxa de erro muito alta 
porém ainda é possível ver o resultado no console)*/
window.addEventListener("load", async () => { 
  const imagemInput = document.getElementById("imagem"); 
  const resultadoTexto = document.getElementById("texto"); 
  const worker = await Tesseract.createWorker("eng"); 
  const mapaInverso = {}; 

    for (const letra in mapaWD) {
      mapaInverso[mapaWD[letra]] = letra; 
    }
      imagemInput.addEventListener("change", async () => {
       const img = imagemInput.files[0]; 
       if (!img) return;

      const res = await worker.recognize(img);

    const textoOCR = res.data.text; 
    const textoTraduzido = textoOCR 
    .split("") 
    .map(caractere => mapaInverso[caractere] || caractere) 
    .join(""); 
     resultadoTexto.value = textoTraduzido; console.log("OCR:", textoOCR); 
   }); 
  });