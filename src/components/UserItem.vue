<template>
    <div class="col-sm-6 mb-3">
        <div class="card">
            <div class="card-header">
                <h5 class="card-title"> {{user.first_name}}</h5>
                <h6 class="card-subtitle"> {{user.available}}</h6>
            </div>
            <div class="card-body">
                <p class="card-text"> {{ user.email}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        user: {
            type: Object,
            required: true
        }
    }
}
</script>
