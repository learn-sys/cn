var md_it = window.markdownit();

function init() {
    var menu = document.querySelector('.book-menu')
    menu.innerHTML = ""
}

function render_demo() {
    var text_area = document.querySelector('#demo_textarea')
    var text = text_area.value
    var render_text = md_it.render(text);
    var result_div = document.querySelector('.book-menu')
    result_div.innerHTML = render_text
    clear_invalid_syntax()
    pack_menu_accordion()
}

// UNIT
function unit_header() {
    var text_area = document.querySelector('#demo_textarea')
    text_area.value = 
`\
\# H1
\#\# H2
\#\#\# H3
\#\#\#\# H4
\#\#\#\#\# H5
\#\#\#\#\#\# H6
`
    render_demo()
}
function unit_list() {
    var text_area = document.querySelector('#demo_textarea')
    text_area.value = 
`\
* list
  * sub-list
    * sub-sub-list
  * sub-list
* list
`
    render_demo()
}
function unit_invalid() {
    var text_area = document.querySelector('#demo_textarea')
    text_area.value = 
`\
1. Ordered List
2. Ordered List

Paragraph

![image](/hexo-theme-book-demo/favicon.ico)

\`\`\`
code
\`\`\`

| Tables |      |      |
| ------ | ---- | ---- |
| col1   | col2 | col3 |

> Blockquote

---
`
    render_demo()
}

// Basic
function basic_collapsed() {
    var text_area = document.querySelector('#demo_textarea')
    text_area.value = 
`\
\# H1 is separator

\#\# H2

- find nearest header
- this unordered list will find H2

\#\#\# H3

- find nearest header
- this unordered list will find H3

\# H1 is separator

\#\#\#\# H4

- find nearest header
- this unordered list will find H4

\#\#\#\#\# H5

- find nearest header
- this unordered list will find H5

\#\#\#\#\#\# H6

- find nearest header
- this unordered list will find H6
`
    render_demo()
}

function basic_uncollapsed() {
    var text_area = document.querySelector('#demo_textarea')
    text_area.value = 
`\
- this unordered list will find nothing
- so it becomes an uncollapsed menu

\# H1 is separator

- this unordered list will find H1
- so it becomes an uncollapsed menu

\#\# H2

- this unordered list will find H2
- so it becomes a collapsed menu
`
    render_demo()
}

// Tricky
function tricky_back_top() {
    var text_area = document.querySelector('#demo_textarea')
    text_area.value = 
`\
- this unordered list will find nothing
- so it becomes an uncollapsed menu

\# H1 is separator

- this unordered list will find H1
- so it becomes an uncollapsed menu

\#\# H2

- this unordered list will find H2
- so it becomes a collapsed menu

> in order to separates two lists, just insert an invalid syntax

- this unordered list will skip H2 and find H1
- so it becomes an uncollapsed menu
`
    render_demo()
}