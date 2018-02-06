<template>
    <div class="editor-container">
        <quill-editor ref="myTextEditor"
                      :content="content"
                      placeholder="123"
        >
        </quill-editor>
    </div>
</template>

<script>
    import { quillEditor } from 'vue-quill-editor'
    import 'quill/dist/quill.snow.css'
    export default {
        components: {
            quillEditor,
        },
        data() {
            return {
                content: '',
            }
        },
        methods: {

        }
    }
</script>

<style>
    .ql-editor{
        min-height: 200px;
    }
</style>