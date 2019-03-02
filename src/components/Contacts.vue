<template>
    <div class="contacts">
        <span v-for="el in contacts">{{el.fio}}|{{el.phone}}<br/></span>
    </div>
</template>

<script>
    export default {
        name: "Contacts",
        data: function () {
            return {
                contacts: [
                    {fio: "Serhiy Ruban", phone: '021-422-6373', id: 8574566464546},
                    {fio: "Roman Suhan", phone: '021-242-6373', id: 46837543653563},
                    {fio: "Manuk Nabru", phone: '021-242-6363', id: 43767333457833},
                ],
            }
        }
    };
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>