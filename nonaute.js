class ReplaceVar {
    constructor(placeholder, content, options) {
        this.placeholder = placeholder;
        this.content = content;
        this.source = options.source;
    }

    // Method to perform the replacement in a given text
    replaceInText(text) {
        return text.replace(this.placeholder, this.content);
    }
}

// Example usage
let field = { post_meta_key: 'author_name' };
let content = 'John Doe';
let replaceVars = {};

replaceVars[field.post_meta_key] = new ReplaceVar("%%cf_" + field.post_meta_key + "%%", content, { source: "direct" });

// Later in the code
let template = "This article is written by %%cf_author_name%%.";
template = replaceVars['author_name'].replaceInText(template);
console.log(template);  // Output: "This article is written by John Doe."
