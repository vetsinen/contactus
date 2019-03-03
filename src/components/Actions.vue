<template>
    <div class="table-responsive">
        <table class="table table-striped">
            <thead>
            <tr>
                <th>
                    type
                </th>
                <th>
                    data
                </th>
                <th>
                    person
                </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="el in actions">
                <td>
                    {{el.type}}
                </td>
                <td>
                    {{el.date}}
                </td>
                <td>
                    ✆{{el.fio}}
                </td>
            </tr>
            </tbody>
        </table>
    </div>

</template>

<script>
    export default {
        name: "Actions",
        data: function () {
            return {
                actions: [
                    {type: "meetAtPub", date: "May 15, 2019", fio: "Serhiy Ruban"},
                    {type: "meetAtPub", date: "June 15, 2019", fio: "Roman Suhan"},
                    {type: "sendSms", date: "March 15, 2019", fio: "Manuk Nabru"},
                ]

            }
        },
        mounted() {
            if (localStorage.actions) {
                this.actions = JSON.parse(localStorage.actions);
            }
            else {
                localStorage.actions = JSON.stringify(this.actions);
            }
        },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>