<template>
    <div>
        AnotherCounter: <br><br>
        <button class="btn btn-primary" @click="asyncIncrement({by: 100, duration: 1000})">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        methods: {
            ...mapActions([
                'asyncIncrement',
                'decrement'
            ])
        }
    }
</script>