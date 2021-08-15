<template>
	<div class = "modal-user">

		<div class = "modal-user__header flex">
			<img src = "./../../../../assets/ico/left-arrow.svg" @click = "$router.push({name: 'ExampleUserList'})"/>

			<p>{{userData.name}}</p>

			<!--<img src = "./../../../../assets/ico/cancel.svg"/>-->

		</div>

		<div class = "modal-user__body">

			<p><span>Age: </span>{{userData.age}}</p>
			<p><span>Info: </span>{{userData.info}}</p>

		</div>

		<div class = "modal-user__body flex">
			<button @click = 'go(-1)'>prev</button>
			<button @click = "go(1)"> next</button>
		</div>

	</div>
</template>

<script>
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import {computed} from "vue";

export default {
	props: {
		id: [String]
	},
	setup(props){

		const store = useStore();
		const router = useRouter();

		const userData = computed(() => store.state.arrayUser.find(item => item.id === Number(props.id)))


		function go(v) {

			let index = store.state.arrayUser.findIndex(item => item.id === Number(props.id)) + v;

			if (index >= store.state.arrayUser.length) index = 0;
			if (index < 0 ) index = store.state.arrayUser.length - 1;

			const newUser = store.state.arrayUser[index];

			router.push({name: "UserProfile", params: {id: newUser.id}})

		}

		return {userData, go}
	},
	name: "ModalUser"
}
</script>

<style scoped>
	.modal-user{
		background-color: white;
		border-radius: 3px;

		padding: 10px;
		box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

		width: 90%;
		max-width: 370px;
	}
	.modal-user__header{
		position: relative;
		align-items: center;
	}
	.modal-user__header>p{
		margin: 6px 0;
		text-align: center;

		width: calc(100% - 13px);
		color: #b2b2b2;
	}
	.modal-user__header img {
		height: 13px;
		padding: 8px;

		position: absolute;
		left: 0;

		cursor: pointer;
	}
	.modal-user__header img:hover{
		background-color: #f9f9f9;
		border-radius: 4px;
	}

	.modal-user__body span{
		color: #4a4949;
	}
	.modal-user__body p{
		color: #b2b2b2;
		font-size: 14px;
		margin: 10px 0;
	}

	.modal-user__body{
		gap: 10px;
	}

	.modal-user__body>button{
		padding: 4px 8px;
		border: 1px solid #cac8c8;
		background-color: #f8f7f7;
		border-radius: 1px;

		cursor: pointer;
	}
	.modal-user__body>button:hover{
		border: 1px solid #a9a8a8;
	}
</style>