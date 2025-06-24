const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('http://localhost:8080/index.html', {
    waitUntil: 'networkidle0'
  });

  // 生成 PDF
  await page.pdf({
    path: 'dog_report.pdf', // 输出 PDF 文件的文件名
    format: 'A4', // PDF 格式
    printBackground: true, // 是否打印背景色
    margin: {
      top: '20px',
      right: '20px',
      bottom: '20px',
      left: '20px'
    }
  });

  console.log('PDF 生成成功！');

  await browser.close();
})();
