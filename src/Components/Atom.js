import {atom} from 'recoil'


export const htmlcode =atom({
    key :'htmlcode',
    default:`<!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8" />
        <title>title</title>
        <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
    </head>
    <body>
        <button class="mybtn">hello</button>
    </body>
    </html>`
})

export const csscode =atom({
    key :'csscode',
    default:`body { margin: 0; padding: 0; }
    button{
        background-color: blue;
       height: 100vh;
    }`
})

export const jscode =atom({
    key :'jscode',
    default:`gsap.fromTo('.mybtn',{x:100},{y:200})`
})