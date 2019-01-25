<template>
    <div>
        <h1 class="text-center text-muted">Search - Vuex </h1>
        <SearchForm/>
        <hr/>
        <UserList />
    </div>
</template>

<script>
import SearchForm from './SearchForm';
import UserList from './UserList';
export default {
    components: {
        SearchForm,
        UserList
    }
}
</script>
