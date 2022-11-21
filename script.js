const books = [{
    "number": 0,
    "author": "Douglas Crockford",
    "imageLink": "JS_the_good_parts.jpg",
    "title": "JavaScript: The Good Parts: The Good Parts",
    "price": 30,
    "description": "With JavaScript: The Good Parts, you'll discover a beautiful, elegant, lightweight and highly expressive language that lets you create effective code, whether you're managing object libraries or just trying to get Ajax to run fast. If you develop sites or applications for the Web, this book is an absolute must"
  },
    {
      "number": 1,
      "author": "David Herman",
      "imageLink": "Effective_JS.jpg",
      "title": "Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript",
      "price": 22,
      "description": "Effective JavaScript is organized around 68 proven approaches for writing better JavaScript, backed by concrete examples. You’ll learn how to choose the right programming style for each project, manage unanticipated problems, and work more successfully with every facet of JavaScript programming from data structures to concurrency"
    },
    {
      "number": 2,
      "author": "David Flanagan",
      "imageLink": "JS_the_definitive_guide.jpg",
      "title": "JavaScript: The Definitive Guide",
      "price": 40,
      "description": "This Fifth Edition is completely revised and expanded to cover JavaScript as it is used in today's Web 2.0 applications. This book is both an example-driven programmer's guide and a keep-on-your-desk reference, with new chapters that explain everything you need to know to get the most out of JavaScript"
    },
    {
      "number": 3,
      "author": " Eric Elliott",
      "imageLink": "programming_JS_applications.jpg",
      "title": "Programming JavaScript Applications",
      "price": 19,
      "description": "Take advantage of JavaScript\’s power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that’s easier—yes, easier—to work with as your code base grows."
    },
    {
      "number": 4,
      "author": "Addy Osmani",
      "imageLink": "learning-javascript-design-patterns.jpg",
      "title": "Learning JavaScript Design Patterns",
      "price": 32,
      "description": "With Learning JavaScript Design Patterns, you\’ll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you."
    },
    {
      "number": 5,
      "author": "Boris Cherny",
      "imageLink": "programming-typescript.jpg",
      "title": "Programming TypeScript",
      "price": 28,
      "description": "Any programmer working with a dynamically typed language will tell you how hard it is to scale to more lines of code and more engineers. That’s why Facebook, Google, and Microsoft invented gradual static type layers for their dynamically typed JavaScript and Python code. This practical book shows you how one such type layer, TypeScript, is unique among them: it makes programming fun with its powerful static type system."
    },
    {
      "number": 6,
      "author": "Alex Banks, Eve Porcello",
      "imageLink": "learning_react_2nd_edition.jpg",
      "title": "Learning React, 2nd Edition",
      "price": 25,
      "description": "If you want to learn how to build efficient React applications, this is your book. Ideal for web developers and software engineers who understand how JavaScript, CSS, and HTML work in the browser, this updated edition provides best practices and patterns for writing modern React code. No prior knowledge of React or functional JavaScript is necessary."
    },
    {
      "number": 7,
      "author": "Bradley Meck Alex Young and Mike Cantelon",
      "imageLink": "node_in_action.jpg",
      "title": "Node.js in Action",
      "price": 38,
      "description": "Node.js in Action, Second Edition is a thoroughly revised book based on the best-selling first edition. It starts at square one and guides you through all the features, techniques, and concepts you'll need to build production-quality Node applications."
    },
    {
      "number": 8,
      "author": "Kyle Simpson",
      "imageLink": "you_dont_know_JS_yet.jpg",
      "title": "You Don't Know JS Yet: Get Started",
      "price": 26,
      "description": "It seems like there's never been as much widespread desire before for a better way to deeply learn the fundamentals of JavaScript. But with a million blogs, books, and videos out there, just where do you START? Look no further!"
    },
    {
      "number": 9,
      "author": "John Resig and Bear Bibeault",
      "imageLink": "secrets_of_the_JS_ninja.jpg",
      "title": "Secrets of the JavaScript Ninja",
      "price": 33,
      "description": "Secrets of the Javascript Ninja takes you on a journey towards mastering modern JavaScript development in three phases: design, construction, and maintenance. Written for JavaScript developers with intermediate-level skills, this book will give you the knowledge you need to create a cross-browser JavaScript library from the ground up."
    }
]

const body = document.body;
const header = document.createElement('header');
body.appendChild(header);

const homePage = document.createElement('a');
homePage.href = '#';
homePage.innerText = 'Book Catalog';
homePage.classList.add('active');
header.appendChild(homePage);

const bag = document.createElement('a');
bag.href = '#';
bag.innerText = 'Order books';
header.appendChild(bag);

const logoContainer = document.createElement('div');
header.appendChild(logoContainer);
const textLogo = document.createElement('h1');
textLogo.innerText = 'BOOK SHOP';
logoContainer.appendChild(textLogo);
const logo = document.createElement('img');
logo.src = 'logo.png';
logoContainer.appendChild(logo);

const main = document.createElement('main');
body.appendChild(main);

const wrapper = document.createElement('div');
wrapper.classList.add('main-wrapper');
main.appendChild(wrapper);

const createCardTemplate = () => {
    const card = document.createElement('div');
    card.classList.add('card');
    return card;
}

for (let i = 0; i < 10; i++) {
    const card = createCardTemplate();
    wrapper.appendChild(card);
    let wrapperForInf = document.createElement("div");
    wrapperForInf.classList.add('wrap');
    card.appendChild(wrapperForInf);
    let images = document.createElement("img");
    images.classList.add('imageLink');
    images.src = books[i].imageLink;
    wrapperForInf.appendChild(images);
    let title = document.createElement("h4");
    title.innerText = books[i].title;
    wrapperForInf.appendChild(title);
    let author = document.createElement("h5");
    author.innerText = books[i].author;
    wrapperForInf.appendChild(author);
    let price = document.createElement('p');
    price.innerText = '$' + books[i].price;
    wrapperForInf.appendChild(price);
    let div = document.createElement("div");
    div.classList.add('wrapper-for-btns');
    wrapperForInf.appendChild(div);
    let button = document.createElement("button");
    button.classList.add('btn');
    button.innerText = "Add to bag";
    div.appendChild(button);
    let showMore = document.createElement("button");
    showMore.classList.add('btn-more');
    showMore.innerText = "Show more";
    div.appendChild(showMore);
  }