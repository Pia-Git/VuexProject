<template>
    <div>
        <p>Double Counter is: {{ counter }}</p>
        <p>Number of Clicks: {{ clicks }}</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        computed: {
            ...mapGetters({
                counter: 'doubleCounter',
                clicks: 'stringCounter',
            })
        }
    }
</script>