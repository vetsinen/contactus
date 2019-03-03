<template>
    <div class="home">
        <h3>Your actions</h3>
        <Actions/>
        <h3>Your contacts</h3>
        <Contacts/>
        <AddContact/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import AddAction from "@/components/AddAction.vue";
    import AddContact from "@/components/AddContact.vue";
    import Contacts from "@/components/Contacts.vue";
    import Actions from "@/components/Actions.vue";

    export default {
        name: "home",
        components: {
            AddAction,
            AddContact,
            Contacts,
            Actions
        }
    };
</script>
