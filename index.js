function init() {

    const booksListDiv = document.getElementById("booksList") // create the books list container
    booksListDiv.style.border = "1px solid black"
    booksListDiv.style.textAlign = "center"






    // create book ui 
    // var singleBook = books[0]
    // var singleBook2 = books[1]

    // books.forEach(function (currentBook) {

    // })

    for (let index = 0; index < books.length; index++) {
        const currentBook = books[index];
        const bookContainerDiv = document.createElement("div") // create the single book container

        const bookTitleH2 = document.createElement("h2") // create header for title
        bookTitleH2.innerText = currentBook.title + "📕" // insert the title from the Data into UI 
        bookTitleH2.style.background = "pink"

        bookContainerDiv.append(bookTitleH2) // append title (h3) into single book container

        booksListDiv.append(bookContainerDiv) // append single book container into books list container

        const bookAuthorH4 = document.createElement("h4")
        bookAuthorH4.innerText = "Author:" + currentBook.author
        bookAuthorH4.style.background = "limegreen"
        bookContainerDiv.append(bookAuthorH4)
        booksListDiv.append(bookContainerDiv)


        const countryH5 = document.createElement("h4")
        countryH5.innerText = "Country:" + currentBook.country + "🌎"
        countryH5.style.background = "yellow"
        bookContainerDiv.append(countryH5)
        booksListDiv.append(bookContainerDiv)


        const year = document.createElement("h4")
        year.innerText = "Year:" + currentBook.year
        year.style.background = "green"
        bookContainerDiv.append(year)
        booksListDiv.append(bookContainerDiv)


        const pagesOfBook = document.createElement("h4")
        pagesOfBook.innerText = "Number of pages:" + currentBook.pages
        pagesOfBook.style.background = "red"
        bookContainerDiv.append(pagesOfBook)
        booksListDiv.append(bookContainerDiv)

        const language = document.createElement("h4")
        language.innerText = "Language:" + currentBook.language
        language.style.background = "blue"
        bookContainerDiv.append(language)
        booksListDiv.append(bookContainerDiv)

        const bookImg = document.createElement("h4")
        bookImg.innerText = "Image link:" + currentBook.imageLink
        bookImg.style.background = "lightblue"
        bookContainerDiv.append(bookImg)
        booksListDiv.append(bookContainerDiv)


        const wikiLink = document.createElement("button");
        wikiLink.innerText = "Go to Wiki";
        wikiLink.style.background = "gray";
        wikiLink.addEventListener("click", function () {
            window.location.href = currentBook.link;
        });

        bookContainerDiv.append(wikiLink);
        booksListDiv.append(bookContainerDiv);






    }

}


init();