// function creates "li" element with "a" as child
function create_list_item(text, ref) {
    var new_li = document.createElement("li");
    
    var new_a = document.createElement("a");
    new_a.href = ref;
    new_a.innerHTML = text;

    new_li.appendChild(new_a);

    return new_li;
}

// function creates link (anchor)
function create_link(name) {
    var new_a = document.createElement("a");
    new_a.name = name;

    return new_a;
}

let text_box = document.querySelector(".text-box");
let content_list = document.querySelector(".content-list ol");
var ref; // reference for "a" and name for anchor
var text; // text of header
var current_list; // current content list to add next item

if (content_list) {
    var headers = document.getElementsByClassName("header");

    // add all founded headers into content list
    for (let i = 0; i < headers.length; i++) {
        text = headers[i].innerHTML;

        // create link for current header
        ref = "link" + i;
        text_box.insertBefore(create_link(ref), headers[i]);

        // set list for adding new item
        if (headers[i].tagName == "H1") {
            current_list = content_list;
        } else if (current_list == content_list) {
            current_list = document.createElement("ul");
            content_list.appendChild(current_list);
        }

        // add item in needed content list
        current_list.appendChild(create_list_item(text, "#" + ref));
    }
}