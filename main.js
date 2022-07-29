let iconHref = document.querySelector("link[rel*='icon']").href,
    icon = document.querySelector("link[rel*='icon']"),
    pageTitle = document.title;

setInterval(() => {
    if (document.title === pageTitle) {

        document.title = "1 پیام جدید"; //add your message instead of پیام جدید 1

        icon.href = "#"; //add second image href instead of #
        
    } else {
        document.title = pageTitle;
        icon.href = iconHref;
    }
}, 1000);
