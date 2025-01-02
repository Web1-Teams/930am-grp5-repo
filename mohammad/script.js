document.getElementById("compileBtn").addEventListener("click", () => {
    const htmlInput = document.getElementById("htmlInput").value;
    const outputFrame = document.getElementById("outputFrame");
    
    // تحميل الكود داخل iframe
    const frameDoc = outputFrame.contentDocument || outputFrame.contentWindow.document;
    frameDoc.open();
    frameDoc.write(htmlInput);
    frameDoc.close();
});