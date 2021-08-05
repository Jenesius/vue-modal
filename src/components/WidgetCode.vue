<template>
	
	<pre class = 'container-code'>
		<div class = "filename" v-if = "name">{{name}}</div>
		<code ref = "code" class = "code">

		</code>
	</pre>
</template>

<script>
	
	import {onMounted, ref} from "vue";
	
	export default {
		props: {
			name: String
		},
		setup(props, {slots}){
		
			const code = ref(null);

			/**
			 *
			 * 1. Обернуть все тэги <span> -> &lt;span&gt;
			 * 2. Обернуть &lt;span&gt в цвет <span color = 'red'>&lt;span&gt</span>
			 * 3. Строки
			 * */
			const wordConfig = [

				{
					words: ["export", "default", "const", "from", "import", "true", "false", "return", "let", "const", "if", "else"],
					style: "color: orange"
				},
				{
					words: ["setup"],
					style: "color: yellow"
				},
				{
					words: ["template", "script"],
					style: "color: yellow"
				},
				{
					reg: /^(npm )/g,
					style: "color: yellow"
				},
				{
					reg: /(\/\/.*)/g,
					style: "color: #8d8d8d"
				},
			];

			let text = "";

			onMounted(() => {


			text = slots.default()[0].children;

			text = text.replace(/\t/g, '    ')
			

			
			text = text.replace('<', "&lt;").replace('>', "&gt;");
			
			text = text.replaceAll('<', "&lt;").replaceAll('>', "&gt;");
			
			text = text.replace(/"([^"]*(?:''[^"]*)*)"/g, `<span style = "color: green">"$1"</span>`);
			
			
			wordConfig.forEach(item => {
				
				
				if (item.words) item.words.forEach(tagName => {
					text = text.replaceAll(tagName, `<span style = "${item.style}">${tagName}</span>`)
				})
				
				
				if (item.reg) text = text.replace(item.reg, `<span style = "${item.style}">$1</span>`)
				
				
			})

			

				code.value.innerHTML= text;
				
			})
			
			return {code}
			
		
		},
		
		name: "WidgetCode"
	}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap');

	.container-code{
		display: flex;
		flex-direction: column;
		background-color: #1b062d;
		color: white;
		letter-spacing: 1px;
		
		border-radius: 6px;
		margin: 13px 0;
		
		overflow-x: auto;
		
		padding: 0 20px;
	}
	.filename{
		padding: 10px 0;
		border-bottom: 2px solid rgba(102, 51, 153, 0.58);
		color: rebeccapurple;
	}
	.code{
		padding: 10px 0;
		line-height: 22px;
		font-size: 14px;
		font-family: 'JetBrains Mono', monospace;
	}
</style>