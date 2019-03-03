<template>
    <div class="AddContact">
        <div>add contact under construction</div>
        <AddContact/>
        <Contacts/>
    </div>
</template>

<script>
    import AddContact from "@/components/AddContact.vue";
    import Contacts from "@/components/Contacts.vue";

    export default {
        name: "addcontact",
        components: {
            AddContact,
            Contacts
        }
    };
</script>