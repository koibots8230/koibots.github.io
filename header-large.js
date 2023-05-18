const template = document.createElement('template');

template.innerHTML=`
    <div class="box">
        <div class="title is-3">
            <div class="has-text-centered">
                <div class="media-center">
                    <figure class=" image is-128x128 is-inline-block">
                        <img src="images/logo.png" alt="KoiBots logo">
                    </figure>
                    <p>Koidocs</p>
                </div>
            </div>
        </div>
        <hr/>
        <div class="title is-6 has-text-centered">
            <a class="has-text-dark mr-6" href="index.html">Home</a>
            <a class="has-text-dark mr-6" href="git.html">Git</a>
            <a class="has-text-dark mr-6" href="vscode.html">VSCode</a>
            <a class="has-text-dark" href="resources.html">Resources</a>
        </div>
    </div>
`
document.body.appendChild(template.content);