// Write a JavaScript function to get the value of the href, hreflang, rel, target, and type attributes of the specified link.
let link = document.querySelector('#wcc')
function attr(link){
    let p = document.createElement('p')
    let text = document.createTextNode( `href: "${link.getAttribute("href")}",
       hreflang: ${link.getAttribute("hreflang")},
        target: ${link.getAttribute("target")},
        type: ${link.getAttribute("type")}.`)
    p.appendChild(text)
    document.body.appendChild(p)
    }


