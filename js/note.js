// js/note.js
// date: 2025-06-24
// author: Honglie Zhang

// 目前不需要额外的 JavaScript 功能
// 可以在这里后续添加与模块交互的 JS 代码

// note.js

function loadNoteContent() {
  // 使用 fetch 动态加载 note.html 内容, 路径应该相对于index.html
  fetch('templates/note.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('网络响应不是 OK');
      }
      return response.text();
    })
    .then(data => {
      // 提取 <body> 中的内容
      const parser = new DOMParser();
      const doc = parser.parseFromString(data, 'text/html');
      // 获取 <body> 内的 HTML
      document.getElementById('note').innerHTML = doc.body.innerHTML; // 插入到页面中
    })
    .catch(error => {
      console.error('加载内容发生错误:', error);
    });
}

// 导出函数以便在其他模块中使用
export { loadNoteContent };
