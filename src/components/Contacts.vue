<template>
    <div class="table-responsive">
        <table class="table table-striped">
            <thead>
            <tr>
                <th>
                    Name Surname
                </th>
                <th>
                    mobile num
                </th>
                <th>
                    Action planned?
                </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="el in contacts">
                <td>
                    {{el.fio}}
                </td>
                <td>
                    ✆{{el.phone}}
                </td>
                <td>
                    ✔
                </td>
            </tr>
            </tbody>
        </table>
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
        },
        mounted() {
            if (localStorage.contacts) {
                this.contacts = JSON.parse(localStorage.contacts);
            }
            else {
                localStorage.contacts = JSON.stringify(this.contacts);
            }
        },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>