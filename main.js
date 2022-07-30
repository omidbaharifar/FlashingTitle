let icon = document.querySelector("link[rel*='icon']"),
    iconHref = icon.href,
    pageTitle = document.title;
let newIcon = "letter.ico";

setInterval(() => {
    document.title = document.title == pageTitle ? "1 پیام جدید" : pageTitle;
    icon.href = document.title == pageTitle ? newIcon : iconHref;
}, 1000);
