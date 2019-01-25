<template>
    <div>
    <div class="row" v-if="users.length > 0">
        <User :user="user" v-for="user in users" :key="user.id"></User>
    </div>
    <div v-else="" class="alert alert-danger">No hay usuarios</div>
    </div>
</template>

<script>
import User from './UserItem';
import {mapGetters} from 'vuex';
export default {
    components:{
        User
    },
    computed: {
        ...mapGetters({
            users: 'filterUsers',
        })
    }
}
</script>
