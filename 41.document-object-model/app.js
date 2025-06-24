//DOM

/* 

DOM stands for "Document Object Model".
The DOM represents the structure of a web page as a tree of objects.
Each HTML element becomes a "node" in this tree.

With DOM, JavaScript can:
- Access HTML elements
- Modify content and styles
- Create or delete elements dynamically
- React to user interactions

*/

// DOM Tree Structure (Split View)

/*

                 Document
                     │
                Root Element
                   <html>
           ┌─────────┴─────────┐
           │                   │
        <head>              <body>
           │                   │
        <title>         ┌──────┴───────┐
           │          <h1>          <a>
       "My title"   "My header"   "My link"
                                    │
                               Attribute:
                                 href=""

Notes:

- The top of the DOM tree is the "Document" object.
- The root element is <html>, which contains <head> and <body>.
- Elements inside <head> and <body> are children of those tags.
- Each tag is called a "node".
- Text inside tags is called a "text node".
- Attributes (like href) belong to element nodes. They are not children

*/
