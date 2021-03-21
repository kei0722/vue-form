<template>
<div>
	<div class="form-section">
		<div class="question-title">
			<p>-性別-</p>
		</div>
		<div class="question-answer">
			<input type="radio" id="male" value="male" v-model="formData1.gender">
			<label for="male">男性</label>
			<input type="radio" id="female" value="female" v-model="formData1.gender">
			<label for="female">女性</label>
		</div>

		<div class="question-title">
			<p>-生年月日-</p>
		</div>
		<div class="question-answer">
			<select v-model="formData1.year" @change="getDays">
				<option v-for="n in 40" :key="n">{{ n + 1980 }}</option>
			</select>年
			<select v-model="formData1.month" @change="getDays">
				<option v-for="n in 12" :key="n">{{ n }}</option>
			</select>月
			<select v-model="formData1.date">
				<option v-for="n in formData1.maxDate" :key="n">{{ n }}</option>
			</select>日
		</div>
	</div>
</div>
</template>

<script>
export default {
	data() {
		return {
			title: 'お客様の情報を入力してください',
			nextPage: '/user-questions',
			formData1: {
				gender: '',
				year: 1981,
				month: 1,
				date: 1,
				maxDate: ''
			}
		}
	},

	created() {
		this.getDays();
		this.$emit('title', this.title);
		this.$emit('nextPage', this.nextPage);
	},

	methods: {
		getDays() {
			this.formData1.maxDate = new Date(this.formData1.year, this.formData1.month, 0).getDate();
		},
		getConsole() {
			console.log('コンソールに出力');
		},
		submitOya(){
			this.$emit('close');
		}
	}
}
</script>
