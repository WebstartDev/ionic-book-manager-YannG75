<template>
    <div class="ion-page background">
        <ion-header>
            <ion-toolbar>
                <ion-title>Book-Manager</ion-title>
            </ion-toolbar>
            <LastBook :books="books" :key="last"></LastBook>
        </ion-header>
        <ion-content class="">

            <h2 style=" text-align: start; padding-left: 10px; font-weight: 600">Last Ones</h2>
            <Books :books="books" :key="list"></Books>
            <ion-fab horizontal="end" vertical="bottom" slot="fixed">
                <ion-fab-button color="light" @click="openModal">
                    <ion-icon name="add"></ion-icon>
                </ion-fab-button>
            </ion-fab>

        </ion-content>
    </div>
</template>


<script>

    import LastBook from "../components/LastBook";
    import Books from "../components/Books";
    import Modal from "../components/Modal";

    import books from "../assets/books"

    export default {
        name: "home",
        components: {
            LastBook,
            Books
        },

        data() {
            return {
                books: books,
                clicked: true,
                list:0,
                last:0,
                Length:books.length
            }
        },

        mounted() {
            if (localStorage.getItem('books')) {
                this.books = JSON.parse(localStorage.getItem('books'))

                console.log(this.books)
            }

            else
                this.books = books
        },

        watch: {
            books: {
                handler(val) {
                    if(this.Length !== val.length) {
                        this.last +=1
                        this.list += 1
                        this.Length = val.length
                    }

                    localStorage.setItem('books',JSON.stringify(val))

                },
                deep: true
            },
        },

        methods: {
            openModal(id) {
                return this.$ionic.modalController
                    .create({
                        component: Modal,
                        componentProps: {
                            propsData: {
                                title: 'Add Book',
                                books: this.books
                            },
                        },
                    })
                    .then(m => m.present())
            },
        }

    };
</script>

<style lang="scss">
    .background {
        background: #c8f3fd;

    }

    ion-title {
        --color: whiteSmoke;

    }

    ion-content {
        --background: none;
        font-family: Montserrat, sans-serif;
        --color: #161616;
        --padding-top: 32vh;
    }

    ion-toolbar {
        --background: rgba(24, 17, 17, 0.18);
    }

    .bounce-enter-active {
        animation: bounce-in .5s;
    }

    .bounce-leave-active {
        animation: bounce-in .5s reverse;
    }

    @keyframes bounce-in {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }
</style>
