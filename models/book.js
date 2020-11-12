const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  authors: { type: String, required: true },
  description: String,
  image: String,
  link: String,
  // saved: { type: Boolean, default: false }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
// title - Title of the book from the Google Books API
// authors - The books's author(s) as returned from the Google Books API
// description - The book's description as returned from the Google Books API
// image - The Book's thumbnail image as returned from the Google Books API

// link - The Book's information link as returned from the Google Books API
const a = {
  kind: "books#volume",
  id: "iO5pApw2JycC",
  etag: "jV+EiV/SJEk",
  selfLink: "https://www.googleapis.com/books/v1/volumes/iO5pApw2JycC",
  volumeInfo: {
    title: "The Ivory Tower and Harry Potter",
    subtitle: "Perspectives on a Literary Phenomenon",
    authors: ["Lana A. Whited"],
    publisher: "University of Missouri Press",
    publishedDate: "2004",
    description:
      "Now available in paper, The Ivory Tower and Harry Potter is the first book-length analysis of J. K. Rowling's work from a broad range of perspectives within literature, folklore, psychology, sociology, and popular culture. A significant portion of the book explores the Harry Potter series' literary ancestors, including magic and fantasy works by Ursula K. LeGuin, Monica Furlong, Jill Murphy, and others, as well as previous works about the British boarding school experience. Other chapters explore the moral and ethical dimensions of Harry's world, including objections to the series raised within some religious circles. In her new epilogue, Lana A. Whited brings this volume up to date by covering Rowling's latest book, Harry Potter and the Order of the Phoenix.",
    industryIdentifiers: [
      { type: "ISBN_10", identifier: "0826215491" },
      { type: "ISBN_13", identifier: "9780826215499" },
    ],
    readingModes: { text: true, image: true },
    pageCount: 418,
    printType: "BOOK",
    categories: ["Literary Criticism"],
    averageRating: 4.5,
    ratingsCount: 13,
    maturityRating: "NOT_MATURE",
    allowAnonLogging: false,
    contentVersion: "2.0.7.0.preview.3",
    panelizationSummary: {
      containsEpubBubbles: false,
      containsImageBubbles: false,
    },
    imageLinks: {
      smallThumbnail:
        "http://books.google.com/books/content?id=iO5pApw2JycC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=iO5pApw2JycC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    language: "en",
    previewLink:
      "http://books.google.com/books?id=iO5pApw2JycC&pg=PA329&dq=harry&hl=&cd=1&source=gbs_api",
    infoLink:
      "http://books.google.com/books?id=iO5pApw2JycC&dq=harry&hl=&source=gbs_api",
    canonicalVolumeLink:
      "https://books.google.com/books/about/The_Ivory_Tower_and_Harry_Potter.html?hl=&id=iO5pApw2JycC",
  },
  saleInfo: { country: "US", saleability: "NOT_FOR_SALE", isEbook: false },
  accessInfo: {
    country: "US",
    viewability: "PARTIAL",
    embeddable: true,
    publicDomain: false,
    textToSpeechPermission: "ALLOWED",
    epub: {
      isAvailable: true,
      acsTokenLink:
        "http://books.google.com/books/download/The_Ivory_Tower_and_Harry_Potter-sample-epub.acsm?id=iO5pApw2JycC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
    },
    pdf: { isAvailable: false },
    webReaderLink:
      "http://play.google.com/books/reader?id=iO5pApw2JycC&hl=&printsec=frontcover&source=gbs_api",
    accessViewStatus: "SAMPLE",
    quoteSharingAllowed: false,
  },
  searchInfo: {
    textSnippet:
      "<b>Harry</b> Potter and the Technology of Magic Elizabeth Teare The July / August <br>\n2001 issue of Book lists J. K. Rowling as one of the ten most influential people in <br>\npublishing . She shares space on this list with John Grisham and Oprah Winfrey&nbsp;...",
  },
};
