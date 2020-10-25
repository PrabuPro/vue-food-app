<template>
    <div>
        <label for="thing">Which is your favorite thing?</label>

        <select @change="$emit('change', $event.target.value)" id="thing" name="thing">
            <option v-for="option in optionArray" :key="option" :value="option">{{option}}</option>
        </select>

    </div>
</template>

<script>
    export default {
        props: {
            select: {
                type: String,
                default: 'takos',
            },
            optionArray: {
                type: Array,
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>