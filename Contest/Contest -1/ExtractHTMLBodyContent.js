// problem link: https://code-lab-ph.vercel.app/labs/code-lab/contests/dc-1/extract-html-body-content

function extractBodyContent(htmlString) {
    // TODO: Implement this function
    let startIdx = htmlString.indexOf("<body>");
    let endIdx = htmlString.indexOf("</body>")
    return htmlString.slice(startIdx + 6, endIdx);
}