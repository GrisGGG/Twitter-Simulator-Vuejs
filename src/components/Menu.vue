<template>
    <nav class="navbar navbar-dark ">
        <div class="container">
            <span class="navbar-brand">Simulador de Tweets</span>
            <button 
            class="btn pl-4 pr-4 btn-info" 
            @click="openCloseForm"
            :class="{ 'btn-info' : !showForm, 'btn-danger': showForm}"
            >
            {{ !showForm ? "Nuevo Tweeet" : "Cerrar Tweet"}}
            </button>
        </div>
    </nav>
</template>

<script>
export default {
    props:{
        showForm: Boolean,
        openCloseForm: Function,
    }
}
</script>

<style>

</style>