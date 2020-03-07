<template>
    <div class="books">

        <ion-slides pager="true">

            <ion-slide v-for="(book, index) in books" :key="index">
                <ion-card>
                    <img :src="book.thumbnailUrl" alt="thumbnail"/>
                    <ion-card-header>
                        <ion-card-title>{{book.title}}</ion-card-title>
                        <ion-card-subtitle>by {{book.author}}</ion-card-subtitle>
                    </ion-card-header>
                    <ion-card-content>
                        <h5>description</h5>
                        <p>{{book.shortDescription}}</p>
                    </ion-card-content>
                    <ion-chip outline color="secondary" @click="openModal(index)">
                        <ion-label>Edit</ion-label>
                        <ion-icon name="create" color="secondary"></ion-icon>
                    </ion-chip>
                    <ion-chip outline color="danger" @click="deleteBook(index)">
                        <ion-label>Delete</ion-label>
                        <ion-icon name="trash" color="danger"></ion-icon>

                    </ion-chip>
                </ion-card>
            </ion-slide>
        </ion-slides>

    </div>
</template>

<script>
    import Modal from "./Modal";

    export default {
        name: 'Books',
        props: {
            books: Array
        },

        methods: {
            deleteBook(id) {
                this.books.splice(id, 1)
            },
            openModal(id) {
                return this.$ionic.modalController
                    .create({
                        component: Modal,
                        componentProps: {
                            propsData: {
                                title: 'Change Book',
                                book: this.books[id],
                                edit: true
                            },
                        },
                    })
                    .then(m => m.present())
            },
        }
    }
</script>

<style lang="scss">
    .books {
        font-family: "Comic Sans MS", cursive;
    }

    .swiper-slide {
        display: block;
        --background: #6e6e6e;
    }

    .swiper-slide h2 {
        margin-top: 2.8rem;
        margin-bottom: 2rem;
    }

    .swiper-slide img {
        max-height: 50%;
        max-width: 70%;
        margin: auto;
        pointer-events: none;
    }

    ion-card {
        --color: #6e6e6e !important;
        --background: whiteSmoke !important;
        padding: 15px;
    }

    ion-card-content p {
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 100%;
        display: block;
        overflow: hidden;
    }

    ion-chip {
        margin-left: 10px;
    }

    ion-icon {
        .edit {
            --color: #0cd1e8;
        }
        .delete{

        }
    }

    @media all  and (min-width: 768px){

        ion-card {
            width: 55vw;
            margin: auto !important;
        }
    }
</style>