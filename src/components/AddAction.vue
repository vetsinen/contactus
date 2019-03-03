<template>
    <div class="AddAction">
        <div>let's add action</div>
        <form>
            <select v-model="type">
                <option>sendSms</option>
                <option>meetAtPub</option>
                <option>orderAGift</option>
            </select><br/>
            <button>I wonna this act</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "AddAction",
        data: function () {
            return {
               type: "meetAtPub"
            }
        }
    }
</script>