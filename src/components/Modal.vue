<template>
    <div class="modal">
        <ion-header>
            <ion-toolbar showBackdrop="true">
                <ion-title slot="secondary">{{ title }}</ion-title>
                <ion-buttons slot="end">
                    <ion-button @click="dismissModal()">
                        <ion-icon name="close"></ion-icon>
                    </ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <ion-item>
                <ion-label class="form__label" position="stacked">Book Name:
                    <ion-text color="danger">*</ion-text>
                </ion-label>
                <ion-input class="form__input" v-if="!book" required type="text"
                           @input="$v.NewBook.title.$model = $event.target.value"></ion-input>
                <ion-input class="form__input" v-if="book" required type="text"
                           @input="$v.book.title.$model = $event.target.value" :value="book.title"></ion-input>
            </ion-item>
                        <div class="error" v-if="(NewBook && !$v.NewBook.title.required && $v.NewBook.title.$error) || (book && !$v.book.title.required && $v.book.title.$error)">Field is required.</div>
                        <div class="error" v-if="(NewBook && !$v.NewBook.title.minLength && $v.NewBook.title.$error ) || (book && !$v.book.title.minLength && $v.book.title.$error)">title must have at least 2 letters.</div>

            <ion-item>
                <ion-label class="form__label" position="stacked">By :
                    <ion-text color="danger">*</ion-text>
                </ion-label>
                <ion-input class="form__input" v-if="!book" required type="text"
                           @input="$v.NewBook.author.$model = $event.target.value"></ion-input>
                <ion-input class="form__input" v-if="book" required type="text"
                           @input="$v.book.author.$model = $event.target.value" :value="book.author"></ion-input>
            </ion-item>

                        <div class="error" v-if="( NewBook && !$v.NewBook.author.required && $v.NewBook.author.$error) || (book && !$v.book.author.required && $v.book.author.$error )">Field is required.</div>
                        <div class="error" v-if="(NewBook && !$v.NewBook.author.minLength && $v.NewBook.author.$error) || (book && !$v.book.author.minLength && $v.book.author.$error)">Author must have at least 2 letters.</div>

            <ion-item>
                <ion-label position="stacked">Description :</ion-label>
                <ion-textarea v-if="!book"
                              @input="$v.NewBook.shortDescription.$model = $event.target.value"></ion-textarea>
                <ion-textarea v-if="book" @input="$v.book.shortDescription.$model = $event.target.value">
                    {{book.shortDescription}}
                </ion-textarea>
            </ion-item>
                        <div class="error" v-if="(NewBook && !$v.NewBook.shortDescription.required && $v.NewBook.shortDescription.$error) || (book && !$v.book.shortDescription.required && $v.book.shortDescription.$error )">Field is required.</div>

            <ion-item>
                <ion-label position="stacked">Image Url :
                    <ion-text color="danger">*</ion-text>
                </ion-label>
                <ion-input class="form__input" v-if="!book" type="url"
                           @input="$v.NewBook.thumbnailUrl.$model = $event.target.value"></ion-input>
                <ion-input class="form__input" v-if="book" type="url"
                           @input="$v.book.thumbnailUrl.$model = $event.target.value"
                           :value="book.thumbnailUrl"></ion-input>
            </ion-item>
                        <div class="error" v-if="(NewBook && !$v.NewBook.thumbnailUrl.required && $v.NewBook.thumbnailUrl.$error) || (book && !$v.book.thumbnailUrl.required && $v.book.thumbnailUrl.$error )">Field is required.</div>
                        <div class="error" v-if="(NewBook && !$v.NewBook.thumbnailUrl.url && $v.NewBook.thumbnailUrl.$error) || (book && !$v.book.thumbnailUrl.url && $v.book.thumbnailUrl.$error )">Image must be an url dude pls don't be stupid it's written.</div>

            <ion-item>
                <ion-label position="stacked">Number of pages :
                    <ion-text color="danger">*</ion-text>
                </ion-label>
                <ion-input class="form__input" v-if="!book" required type="text"
                           @input="$v.NewBook.pageCount.$model = $event.target.value"></ion-input>
                <ion-input class="form__input" v-if="book" required type="text"
                           @input="$v.book.pageCount.$model = $event.target.value" :value="book.pageCount"></ion-input>
            </ion-item>
                        <div class="error" v-if="(NewBook && !$v.NewBook.pageCount.required && $v.NewBook.pageCount.$error) || (book && !$v.book.pageCount.required && $v.book.pageCount.$error )">Field is required.</div>
                        <div class="error" v-if="(NewBook && !$v.NewBook.pageCount.integer && $v.NewBook.pageCount.$error) || (book && !$v.book.pageCount.integer && $v.book.pageCount.$error )">Only number accepted.</div>


            <div style="display: flex; justify-content: center">
                <ion-chip v-if="!edit" class="validate" @click="getNewBook">
                    <ion-label>Add the book</ion-label>
                </ion-chip>

                <ion-chip v-if="edit" class="validate" @click="changeBook">
                    <ion-label>update the book</ion-label>
                </ion-chip>
            </div>

        </ion-content>


    </div>
</template>

<script>
    import {required, url, integer, minLength} from 'vuelidate/lib/validators'

    export default {
        name: 'Modal',
        props: {
            title: {type: String, default: 'Super Modal'},
            edit: {type: Boolean, default: false},
            book: Object,
            books: Array
        },
        data() {
            return {
                NewBook: {
                    title: '',
                    author: '',
                    shortDescription: '',
                    thumbnailUrl: '',
                    pageCount: '',
                }
            }
        },

        validations: {
            NewBook: {
                title: {
                    required,
                    minLength: minLength(2)
                },
                author: {
                    required,
                    minLength: minLength(2)
                },
                shortDescription: {
                    required
                },
                thumbnailUrl: {
                    required,
                    url
                },
                pageCount: {
                    required,
                    integer
                }
            },

            book: {
                title: {
                    required,
                    minLength: minLength(2)
                },
                author: {
                    required,
                    minLength: minLength(2)
                },
                shortDescription: {
                    required
                },
                thumbnailUrl: {
                    required,
                    url
                },
                pageCount: {
                    required,
                    integer
                }
            }
        },

        methods: {
            dismissModal() {
                if (this.book && this.$v.book.$invalid)
                    this.errorAlert()

                else
                this.$ionic.modalController.dismiss()
            },

            errorAlert() {
                return this.$ionic.alertController
                    .create({
                        header: 'Erreur',
                        subHeader: '',
                        message: 'Tout les champs sont requis, et doivent être correctement remplis  !',
                        buttons: ["J'ai compris  !"],
                    })
                    .then(a => a.present())
            },

            getNewBook() {

                if (this.$v.NewBook.$invalid)
                    this.errorAlert()
                else {
                    this.books.push(this.NewBook)
                    this.$ionic.modalController.dismiss()
                }

            },

            changeBook() {
                if (this.$v.book.$invalid)
                    this.errorAlert()

                else
                this.$ionic.modalController.dismiss()
            }

        }
    }
</script>

<style scoped lang="scss">
    .modal {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2)),
        url("../assets/photo-1481627834876-b7833e8f5570.jpg") center no-repeat;
        background-size: cover;
    }

    .error {
        color: #ff3a50;
        font-style: italic;
        text-shadow: black 1px 1px 7px;
        margin-bottom: 5px;
    }

    ion-toolbar {
        --color: aliceblue;
    }

    ion-item {
        --background: rgba(236, 236, 236, 0.5);
        margin-bottom: 10px;
        --highlight-color-focused: aliceblue;

        ion-label {
            text-shadow: #4b4c51 1px 1px 1px;
        }
    }

    ion-item.item-has-focus > ion-label {
        color: aliceblue !important;
        text-shadow: 1px 1px 3px black;
    }

    ion-content {
        --background: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .validate {
        --background: #4fff86;
    }
</style>