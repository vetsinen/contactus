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
                    {type: "meetAtPub",date:"May 15, 2019",fio:"Jack Burns"},
                    {type: "meetAtPub",date:"June 15, 2019",fio:"Buddy Porns"},
                    {type: "sendSms",date:"March 15, 2019",fio:"Larry Unicorns"},
                ]

            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>