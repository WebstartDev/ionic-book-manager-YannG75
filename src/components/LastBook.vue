<template>
    <div class="hello">

        <div class="lastBook" :style="this.backgroundLastBook">
            <span><em>New</em></span>
            <h1 style="color: whitesmoke; font-size: 10vw; width: 50%; text-shadow: 1px 3px 6px black;">
                {{books[books.length-1].title}}</h1>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            books: Array
        },
        data() {
            return {
                backgroundLastBook: ""
            }

        },

        mounted() {
            this.backgroundLastBook = "background: url('" + this.books[this.books.length - 1].thumbnailUrl + "')center no-repeat"
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .hello {
        margin-bottom: 20px;
        position: absolute;
        top: 0;
        z-index: 0;
        width: 100vw;
    }

    .lastBook {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        height: 40vh;
        padding: 20px;
        box-shadow: 1px 1px 7px #161616;
        background-size: cover;
    }

    span {
        text-align: start;
        margin-bottom: 15px;
        color: #161616;
        text-shadow: 2px 1px 4px #fffbf9;
        font-weight: bold;
    }

    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
