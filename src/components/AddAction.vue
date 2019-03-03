<template>
    <div class="AddAction">
        <div>let's add action</div>
        <form>
            <select v-model="type">
                <option>sendSms</option>
                <option>meetAtPub</option>
                <option>orderAGift</option>
            </select><br/>
            <label for=""><input type="text" placeholder="date to act"></label><br/>
            <select v-model="fio">
                <option>Serhiy Ruban</option>
                <option>Roman Suhan</option>
                <option>Rodion Zadorozhniy</option>
            </select><br/>
            <button v-on:click="addAction">I wonna this act</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "AddAction",
        data: function () {
            return {
                type: "meetAtPub",
                date: null,
                fio: "Serhiy Ruban"
            }
        },
        methods: {
            addAction: function () {
                let actions =JSON.parse(localStorage.actions);
                actions.push({type:this.type,date:this.date, fio:this.fio});
                localStorage.actions = JSON.stringify(actions);
            }
        }
    }
</script>