<template>
    <div class="row">
        <div class="col">
            <div class="form-group mb-2">
                <label class="sr-only">Escribe Tu busqueda</label>
                <input type="text" v-model="search" class="form-control" />
            </div>
            <div class="form-check form-check-inline">
                <input class="form-radio-input" v-model="available" :value="true" type="radio" />
                inscrito
            </div>
            <div class="form-check form-check-inline">
                <input class="form-radio-input" v-model="available" :value="false" type="radio" />
                No inscrito
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        search: {
            get () {
                return this.$store.state.filter.query;
            },
            set (val) {
                this.$store.commit('SET_QUERY', val);
            }
        },
        available: {
            get () {
                return this.$store.state.filter.available;
            },
            set () {
                return this.$store.commit('SET_AVAILABLE');
            }
        }
    }
}
</script>
