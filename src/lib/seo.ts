export const seo = {
  home: {
    title: "DabPython - 轻松掌握Python编程",
    description: "DabPython旨在帮助初学者迈出 Python 编程的第一步。无论您是完全新手还是有些基础，DabPython 都将为您提供一个友好的学习环境，让您轻松入门 Python。无论您是想开发网站、数据分析、人工智能还是其他任何领域，学会 Python 都是一个非常有价值的技能。所以，赶快来 DabPython，开始您的编程之旅吧！",
    url: new URL(
      process.env.NODE_ENV === "production"
        ? "https://python.dabaz.me"
        : "http://localhost:3000"
    ),
    imageSrc: "https://python.dabaz.me/images/home/opengraph-image.jpg",
    imageAlt: "DabPython logo featuring a stylized 'dp' symbol on the left and the text 'DabPython' on the right, set against a gradient blue background.",
    siteName: "DabPython",
  }} as const;